import { Button, Flex, Input, Select, Textarea } from '@chakra-ui/react'
import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const inputStyling= {
        border:"none",
        borderBottom:"1px solid #1E174B",
        borderRadius:"0",
        marginY:"0.25rem",

        _placeholder : {
            fontSize:"0.85rem"
        }
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "", 
        subject: "",
        message: "",
    })
    

    const handleInputChange = e => {
        const { name, value } = e.target

        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        e.target.value = '';
    }

    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yr0qvoe', 'template_0jod4s4', form.current, '54DMJLKarlFKah0TK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

        setFormData({
            name: "",
            email: "", 
            subject: "",
            message: "",
        });
        
      };
  return (
    <>
        <form 
            ref={form}
            onSubmit={sendEmail}
        >
            <Flex gap="1rem">
                <Input
                    placeholder="Full Name"
                    type="text"
                    sx={inputStyling}
                    name="formData.name"
                  
                />
                <Input
                    placeholder="Email"
                    type="email"
                    sx={inputStyling}
                    name="formData.email"
                    // value={formData.email}
                    // onChange={handleInputChange}
                />
            </Flex>
            <Select
                sx={inputStyling}
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
            >
                <option value='business'>Business</option>
                <option value='careers'>Careers</option>
                <option value='enquiries'>General Enquiries</option>
            </Select>
            <Textarea
                placeholder="Message"
                name="formData.message"
                sx={inputStyling}
               
            />
            <Button onClick={sendEmail} variant="standardButton">
                Submit
            </Button>
        </form>
    </>
  )
}

export default ContactForm