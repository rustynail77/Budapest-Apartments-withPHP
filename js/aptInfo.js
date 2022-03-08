
class aptInfo {
    constructor(
      code,
      name,
      street,
      strType,
      houseNumber,
      floor,
      aptNumber,
      featImg,
      galleryImages,
      description, 
      galleryCaptions,
      airbnbPageUrl,     
    ) {
      this.code = code;
      this.name = name;
      this.address = {
          street: street,
          strType: strType,
          houseNumber: houseNumber,
          floor: floor,
          aptNumber: aptNumber,
          };
      this.featImg = featImg;
      this.galleryImages = galleryImages;
      this.description = description;
      this.galleryCaptions = galleryCaptions;
      this.airbnbPageUrl = airbnbPageUrl;
      }
  }

export default aptInfo;