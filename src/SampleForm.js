// import React, { useState } from 'react';
// import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Box } from '@mui/material';

// export default function SampleForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     favoriteColor: '',
//     agreeTerms: false,
//   });

//   const handleInputChange = (e) => {
//     const { name, value, checked, type } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     // Submit form data to backend or handle accordingly
//   };

//   return (
//     <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1 }, maxWidth: 400, mx: 'auto' }}>
//       <TextField
//         label="Name"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//         fullWidth
//         required
//       />
//       <TextField
//         label="Age"
//         name="age"
//         type="number"
//         value={formData.age}
//         onChange={handleInputChange}
//         fullWidth
//         required
//       />
//       <FormControl fullWidth sx={{ m: 1 }}>
//         <InputLabel id="favorite-color-label">Favorite Color</InputLabel>
//         <Select
//           labelId="favorite-color-label"
//           name="favoriteColor"
//           value={formData.favoriteColor}
//           label="Favorite Color"
//           onChange={handleInputChange}
//         >
//           <MenuItem value="Red">Red</MenuItem>
//           <MenuItem value="Blue">Blue</MenuItem>
//           <MenuItem value="Green">Green</MenuItem>
//         </Select>
//       </FormControl>
//       <FormControlLabel
//         control={<Checkbox checked={formData.agreeTerms} onChange={handleInputChange} name="agreeTerms" />}
//         label="I agree to the terms and conditions"
//       />
//       <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
//         Submit
//       </Button>
//     </Box>
//   );
// }

import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Radio, RadioGroup, Box, Typography } from '@mui/material';

export default function SampleForm() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    favoriteColor: '',
    numberOfPeople: '',
    loudDiscussions: '',
    needProjector: false,
    outdoorVisibility: false,
    fastInternet: false,
    cafeteriaNearby: false,
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit form data to backend or handle accordingly
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ '& .MuiTextField-root': { m: 1 }, maxWidth: 400, mx: 'auto' }}>
      {/* Existing Fields */}
      {/* ... */}

      <TextField
        label="Number of People"
        name="numberOfPeople"
        type="number"
        value={formData.numberOfPeople}
        onChange={handleInputChange}
        fullWidth
        required
      />

      <FormControl component="fieldset" sx={{ mt: 2 }}>
        <Typography>Loud Discussions</Typography>
        <RadioGroup
          row
          name="loudDiscussions"
          value={formData.loudDiscussions}
          onChange={handleInputChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      <FormControlLabel
        control={<Checkbox checked={formData.needProjector} onChange={handleInputChange} name="needProjector" />}
        label="Need another screen/projector"
      />

      <FormControlLabel
        control={<Checkbox checked={formData.outdoorVisibility} onChange={handleInputChange} name="outdoorVisibility" />}
        label="Prefer visibility to outdoors"
      />

      <FormControlLabel
        control={<Checkbox checked={formData.fastInternet} onChange={handleInputChange} name="fastInternet" />}
        label="Require fast internet"
      />

      <FormControlLabel
        control={<Checkbox checked={formData.cafeteriaNearby} onChange={handleInputChange} name="cafeteriaNearby" />}
        label="Should there be a cafeteria nearby?"
      />

      {/* Existing Agree Terms Checkbox */}
      {/* ... */}

      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}
