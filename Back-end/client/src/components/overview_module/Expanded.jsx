import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ReactImageZoom from 'react-image-zoom';

function Expanded(props) {
  const imageProps = {
    img: props.selectedPhoto,
    zoomPosition: 'original',
    alt: 'Image not Available'
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">

        <Button
          variant="text"
          className="x"
          onClick={() => {
            props.changeViewDefault();
          }}
        >
          X
        </Button>
        <div className="main-img-container">
          <div className="main-img-and-arrows">
            <Button
              onClick={(e) => {
                props.previousPhoto(e);
              }}
              variant="text"
            >
              &lt;
            </Button>
            <ReactImageZoom {...imageProps} />
            <Button
              onClick={(e) => {
                props.nextPhoto(e);
              }}
            >
              &gt;
            </Button>
          </div>
        </div>
        <div className="expanded-photo-gallery">
          {props.photos.map((photo, index) => {
            if (index === props.selectedIndex) {
              return (
                <img
                  onClick={(e) => {
                    handleChangePhoto(e);
                  }}
                  key={index}
                  className="style-other-imgs-selected"
                  src={photo.url}
                  index={index}
                  alt={"Image Unavailable"}
                />
              );
            }
            return (
              <img
                onClick={(e) => {
                  props.changeSelectedPhoto(e);
                }}
                className="style-other-imgs"
                src={photo.url}
                key={index}
                index={index}
                alt={"Image Unavailable"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Expanded;
