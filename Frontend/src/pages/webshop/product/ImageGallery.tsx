import { observer } from "mobx-react-lite";
import React, { useState } from 'react';
import { Grid } from "@mui/material";

type ImageGalleryProps = {
  imageURLs: string[];
}

export const ImageGallery: React.FC<ImageGalleryProps> = observer((props: ImageGalleryProps) => {
  const [mainImage, setMainImage] = useState(props.imageURLs[0]);
  const image1 = (props.imageURLs[0]);
  const image2 = (props.imageURLs[1]);
  const image3 = (props.imageURLs[2]);
  const image4 = (props.imageURLs[3]);

  const tempImages: Array<string> = [mainImage, image1, image2, image3, image4]

  const [image1Clicked, setImage1Clicked] = useState(true);
  const [image2Clicked, setImage2Clicked] = useState(false);
  const [image3Clicked, setImage3Clicked] = useState(false);
  const [image4Clicked, setImage4Clicked] = useState(false);

  function handleClick(pictureNumber: number) {
    switch (pictureNumber) {
      case 1:
        setImage1Clicked(true);
        setImage2Clicked(false);
        setImage3Clicked(false);
        setImage4Clicked(false);
        break;
      case 2:
        console.log("case2?")
        setImage1Clicked(false);
        setImage2Clicked(true);
        setImage3Clicked(false);
        setImage4Clicked(false);
        break;
      case 3:
        setImage1Clicked(false);
        setImage2Clicked(false);
        setImage3Clicked(true);
        setImage4Clicked(false);
        break;
      case 4:
        setImage1Clicked(false);
        setImage2Clicked(false);
        setImage3Clicked(false);
        setImage4Clicked(true);
        break;
    }
    setMainImage(tempImages[pictureNumber]);
  }


  return (
    <Grid container display={'flex'}>
      <Grid item lg={3}>
        <div >
          <img src={image1} key={"1productImgGalSelImg"} onClick={() => handleClick(1)} className={image1Clicked ? "small-images clicked" : "small-images"} alt="" />
          <img src={image2} key={"2productImgGalSelImg"} onClick={() => handleClick(2)} className={image2Clicked ? "small-images clicked" : "small-images"} alt="" />
          <img src={image3} key={"3productImgGalSelImg"} onClick={() => handleClick(3)} className={image3Clicked ? "small-images clicked" : "small-images"} alt="" />
          <img src={image4} key={"4productImgGalSelImg"} onClick={() => handleClick(4)} className={image4Clicked ? "small-images clicked" : "small-images"} alt="" />
        </div>
      </Grid>
      <Grid item lg={9}>
        <div >
          <img src={mainImage} key={"MainproductImgGalSelImg"} alt="" />
        </div>
      </Grid>
    </Grid>
  )

});
export default ImageGallery;

