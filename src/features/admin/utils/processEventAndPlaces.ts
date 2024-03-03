import { EditEventType } from "../../events/types/eventTypes";
import { EditPlaceType } from "../../places/types/placeTypes";

export const getUpdateEventDS = (data: EditEventType) => {
  const {banner, pictures, ...rest} = data
  const newData: EditEventType = rest 
  if (banner && typeof banner != 'string' ){
    newData.banner = banner
  }
  if (pictures){
    const newPictures = pictures.filter((picture) => typeof picture != 'string')
    newData.pictures = newPictures
  }
  return newData
}

export const getUpdatePlaceDS = (data: EditPlaceType) => {
  const {banner, pictures, ...rest} = data
  const newData: EditPlaceType = rest 
  if (banner && typeof banner != 'string' ){
    newData.banner = banner
  }
  if (pictures){
    const newPictures = pictures.filter((picture) => typeof picture != 'string')
    newData.pictures = newPictures
  }
  return newData
}