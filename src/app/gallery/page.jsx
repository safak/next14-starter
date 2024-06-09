"use client"
import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./tanishq";
import styles from "./photogallery.module.css"

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { cds23, images } from "./cds23";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import WSPGallery from "@/components/WSPGallery/WSPGallery";
import { makeStyles } from "@material-ui/core/styles";
import {culfest23} from "./culfest23"

const metadata = {
  title: {
    default: "Gallery",
    template: "%s | Quod Invicta"
  },
  description: 'The Official Webpage for Quod Invicta',
}


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    
    padding: 20,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  rectangle: {
    width: "80%",
    height: 200,
    backgroundColor: "blue",
    marginTop:20
  }
}));


const PhotoGallery = () => {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);

  // const openLightbox = useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };


  const classes = useStyles();

  return (
    <div className={classes.root}>

      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div >
            <h1>CDS &apos;23</h1>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Gallery photos={cds23} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={cds23.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </AccordionDetails>
      </Accordion>


      <Accordion>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div >
            <h1>Tanishq&apos;s 2020 Valentine Collection</h1>
          </div>
        </AccordionSummary>

        <AccordionDetails>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </AccordionDetails>
      </Accordion> */}
      <div className={styles.title}>
        <h1>Chic Couture Collection</h1>
      </div>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"><h1>Culfest &apos;23</h1></AccordionSummary>
        <AccordionDetails>
        <WSPGallery
        galleryImages={culfest23}
      />
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"><h1>CDS &apos;23</h1></AccordionSummary>
        <AccordionDetails>
          <WSPGallery
            galleryImages={cds23}
          />
        </AccordionDetails>
      </Accordion>




      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"><h1>Tanishq&apos;s 2020 Valentine Collection</h1></AccordionSummary>
        <AccordionDetails>
        <WSPGallery
        galleryImages={photos}
      />
        </AccordionDetails>
      </Accordion>

      


    </div>
  );
}

export default PhotoGallery


