import axios from 'axios'
import { TYPES } from "../../constants/actions/checkout";

export const fetchShippingFee = (address) => (dispatch) => {
    const shopLatitude = 10.849973;
  const shopLongitude = 106.771626;
  axios
    .get(
      `http://api.positionstack.com/v1/forward?access_key=b877bd11fcba5988a39638be29741df5&query=${address}`
    )
    .then(async (res) => {
      const current = await res?.data?.data[0];
      const { latitude, longitude } = current;
      const R = 6371e3; // metres
      const latShop = (shopLatitude * Math.PI) / 180;
      const latAddress = (latitude * Math.PI) / 180;
      const squareRootOmega = ((latitude - shopLatitude) * Math.PI) / 180;
      const squareRootLamda = ((longitude - shopLongitude) * Math.PI) / 180;
      const a =
        Math.sin(squareRootOmega / 2) * Math.sin(squareRootOmega / 2) +
        Math.cos(latShop) *
          Math.cos(latAddress) *
          Math.sin(squareRootLamda / 2) *
          Math.sin(squareRootLamda / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // in metres
      const distance = Math.ceil(d) / 1000;
      console.log('distance', distance)
      const cost = await getShippingFee(distance);
      return dispatch({
        type: TYPES.GET_SHIIPING_FEE,
        payload: cost
      })
    })
    .catch((err) => {
      console.log(err);
    });
}

export const getShippingFee = (distance) => {
  const roundDistance = Math.ceil(distance)
  if(roundDistance <= 50){
    return 'FREE SHIP'
  }else{
    return roundDistance* 0.2
  }
};