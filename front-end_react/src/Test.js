import React, { useState } from 'react';
import './Test.css'; 
import axios from 'axios';
import { Card, CardGroup, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const UploadImg = () => {
  const [file, setFile] = useState({}) 
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null) 
  const handleUploadImage = (e) => { 
      const file = e.target.files[0] 
      const reader = new FileReader(); 
      reader.onloadend = () => { 
          setFile(file) 
          setImagePreviewUrl(reader.result) 
      }
      reader.readAsDataURL(file) 
  }
  
  return(
    <div>
      <div className='web'>
        <h1>WELCOME TO WEBSITE</h1>
      </div>
      <div className="Upload">
        <div align="center"><h1>อัพโหลดรูปภาพ</h1></div>
        <br />
        <br />
      </div>
       
      <div>  
        <CardGroup style={{ margin: 5, padding: 5 }}>
        <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
        <CardImg top width="30%" src={imagePreviewUrl ? imagePreviewUrl :    
              "https://dcvta86296.i.lithium.com/t5/image/serverpage/image-  id/14321i0011CCD2E7F3C8F8/image-size/large?v=1.0&px=999"} />
            <CardBody>
                <CardTitle><h4><input type="file"onChange={handleUploadImage} /> </h4></CardTitle>
                <CardText></CardText>
                <div ALIGN="RIGHT"><CardText><button1 onclick="onClickUpload()">  Upload </button1></CardText></div>
            </CardBody>
        </Card>

        <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
        <CardImg top width="30%" src={imagePreviewUrl ? imagePreviewUrl :    
              "https://dcvta86296.i.lithium.com/t5/image/serverpage/image-  id/14321i0011CCD2E7F3C8F8/image-size/large?v=1.0&px=999"} />
            <CardBody>
            <CardTitle><h4><input type="file"onChange={handleUploadImage} /> </h4></CardTitle>
                <CardText></CardText>
                <div ALIGN="RIGHT"><CardText><button1> Upload </button1></CardText></div>
        </CardBody>
        </Card>

        <Card style={{ margin: 10, padding: 10,backgroundColor:"#ecdff3" }}>
        <CardImg top width="30%" src={imagePreviewUrl ? imagePreviewUrl :    
              "https://dcvta86296.i.lithium.com/t5/image/serverpage/image-  id/14321i0011CCD2E7F3C8F8/image-size/large?v=1.0&px=999"} />
            <CardBody>
            <CardTitle><h4><input type="file"onChange={handleUploadImage} /> </h4></CardTitle>
                <CardText></CardText>
                <div ALIGN="RIGHT"><CardText><button1> Upload </button1></CardText></div>
            </CardBody>
        </Card>

        <Card style={{ margin: 10, padding: 10,backgroundColor:"#bcf8cf" }}>
        <CardImg top width="30%" src={imagePreviewUrl ? imagePreviewUrl :    
              "https://dcvta86296.i.lithium.com/t5/image/serverpage/image-  id/14321i0011CCD2E7F3C8F8/image-size/large?v=1.0&px=999"} />
            <CardBody>
            <CardTitle><h4><input type="file"onChange={handleUploadImage} /> </h4></CardTitle>
                <CardText></CardText>
                <div ALIGN="RIGHT"><CardText><button1 >  Upload </button1></CardText></div>
            </CardBody>
        </Card>
    </CardGroup>
    
            </div>

   </div>    
  );
  
}
export default UploadImg