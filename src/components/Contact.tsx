import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const form = useRef();

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      setLoading(true);
      const data = {
        name: name,
        contact: email,   // mapping ke Apps Script kamu
        message: message
      };

      try {
        const res = await fetch(process.env.REACT_APP_API_URL as string, {
          method: "POST",
          body: JSON.stringify(data),
        });

        const result = await res.json();
        console.log(result);

        setLoading(false);
        setDialogMessage("Data berhasil dikirim 🚀");
        setDialogOpen(true);

        // reset form
        setName('');
        setEmail('');
        setMessage('');

      } catch (error) {
        console.error(error);
        setLoading(false);
        setDialogMessage("Gagal kirim data ❌");
        setDialogOpen(true);
      }
    }

    /* Uncomment below if you want to enable the emailJS */

    // if (name !== '' && email !== '' && message !== '') {
    //   var templateParams = {
    //     name: name,
    //     email: email,
    //     message: message
    //   };

    //   console.log(templateParams);
    //   emailjs.send('service_id', 'template_id', templateParams, 'api_key').then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //     },
    //     (error) => {
    //       console.log('FAILED...', error);
    //     },
    //   );
    //   setName('');
    //   setEmail('');
    //   setMessage('');
    // }
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact-card">
          <h1>Contact Me</h1>
          <p className="contact-subtitle">Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            onSubmit={sendEmail}
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            <div style={{ display: dialogOpen ? 'none' : 'block' }}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </div>
          </Box>
        </div>
      </div>

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        PaperProps={{
          style: {
            backgroundColor: '#0d1116',
            color: 'white',
          }
        }}
      >
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ color: 'white' }}>
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} style={{ color: '#5000ca' }}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Contact;