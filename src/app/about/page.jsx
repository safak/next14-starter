
import Image from "next/image"
import styles from "./about.module.css"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import ColouredLine from "@/components/colouredLine/colouredLine";

export const metadata = {
  title: {
    default: "About Page",
    template: "%s | Quod Invicta"
  },
  description: 'The Official Webpage for Quod Invicta',
}


const AboutPage = () => {


  return (
    <div className={styles.container}>
      {/* <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill />
      </div> */}
      {/* <h1 className={styles.subtitle}>About The Team</h1>
      <div className={styles.textContainer}>
          Quod Invicta was founded in 2011 and was named as Invincibles and was rebranded in 2017 as Quod Invicta, Invicta is &apos;Invincibles&apos; in Latin to keep the history of the team. Our main objective is to make clothing more of a lifestyle than something that is used to cover one&apos;s body through engineering and collaborating with brands to create an awareness of sustainable clothing.
      </div>
      <h1 className={styles.subtitle}>Achievements</h1>
      <div >
        <ul className={styles.achievements}>
            <li>Culfest&apos;20 - Champions</li>
            <li>Ensemble Valhalla&apos;19 - Champions </li>
            <li>We had participated in various events and fashion shows organized by IIT Guwahati, IIT Kharagpur, NIT Jamshedpur, NIT Rourkela, Xavier School of Management and Tata Steel from 2011-2020.</li>
            <li>Tanishq&apos;s 2020 Valentine&apos;s collection was directed and shot by Invicta.</li>
        </ul>
      </div> */}


      <Card className={styles.imgContainer} sx={{ maxWidth: 1080 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            // height="704"
            image="/about.png"
            alt="green iguana"
          />
          <CardContent>

            <Typography variant="body2" color="text.secondary">
              Culfest 2023
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>




      <div className={styles.accordion}>

        <div className={styles.about}>



          <Accordion defaultExpanded >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography>About The Team</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Quod Invicta was founded in 2011 and was named as Invincibles and was rebranded in 2017 as Quod Invicta, Invicta is &apos;Invincibles&apos; in Latin to keep the history of the team. Our main objective is to make clothing more of a lifestyle than something that is used to cover one&apos;s body through engineering and collaborating with brands to create an awareness of sustainable clothing.
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>

        <div className={styles.achievements}>


          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography>Achievements</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>

                Culfest&apos;20 - Champions <br />
                Ensemble Valhalla&apos;19 - Champions <br />
                We had participated in various events and fashion shows organized by IIT Guwahati, IIT Kharagpur, NIT Jamshedpur, NIT Rourkela, Xavier School of Management and Tata Steel from 2011-2020.<br />
                Tanishq&apos;s 2020 Valentine&apos;s collection was directed and shot by Invicta. <br />

              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

      </div>


      {/* About The Team */}

      <div className={styles.title}>
        <h1>The Team</h1>
        <br />
        <h3>Core Members</h3>
      </div>

      <div className={styles.cards}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"

              image="/diya.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Diya
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Captain
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"

              image="/shikha.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Shikha
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Team Manager
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              
              image="/lavish.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lavish
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vice - Captain
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"

              image="/kaushiki.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kaushiki
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Vice - Captain
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>


        
      </div>
      <br />
        <div className={styles.title}>
          <h1>Meet The Developers</h1>
        </div>
        <div className={styles.cards}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="180"
              

              image="/ashish.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ashish
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Web Developer
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
    </div>
  )
}

export default AboutPage