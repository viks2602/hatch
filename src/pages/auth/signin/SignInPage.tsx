import React from "react";
import { Box, Button, InputLabel, Paper, TextField, Typography } from "@mui/material"
import { bgLoginImg } from "../../../assets/Images";
import { useNavigate } from "react-router-dom";
import { common } from "@mui/material/colors";
import { useFormik} from "formik";
import { ILogin } from "../../../interfaces/ILogin";
import { hatchLogo } from "../../../assets/Logo";

function SignInPage() {
  const navigate = useNavigate();


  const {values, errors, touched, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues:{
      email: '',
      password:'',
    } as ILogin,
    onSubmit: submitHandler,
    validate:(values: ILogin)=>{
        const errors: any = {};
        if(!values.email){
            errors.email = 'required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        };

        return errors
    }
  });

  const [loading, setLoading] = React.useState(false);

  async function submitHandler(values: ILogin) {
    setLoading(true);
    navigate('/insightreports');
  //  try {
  //     const formData = {
  //       ...values,
  //       login:true
  //     }
  //     const response = await login_api(formData);
  //     if(response?.data?.success){  
  //     navigate('org/view-children');
  //     }
  //   } catch (error: any) {
  //     console.log(error);
  //     if(error.response.data?.message){
  //     }else{
  //       console.log("somthing went wrong");   
  //     }
  //   }finally{
  //     setLoading(false);
  //     navigate('org/view-children');
  //   }
}


  // const userRole = 'HATCH-ADMIN'


  return (
    <Box
      sx={{
        background: `url(${bgLoginImg})`,
        backgroundSize: "cover",
      }}
      component='div'
      className="login-container"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: 'center',
          alignItems: "center",
          height: "100vh",
          width: '100%'

        }}
      >
        <Paper sx={{ borderRadius: 3, maxWidth: 550, minWidth: 550 }}>
          <Box sx={{ textAlign: 'center', width: '100%', pt: 2 }}>
            <img src={hatchLogo} alt="Hatch Insight Logo" width={300} />
          </Box>
          <Box sx={{ background: '#b8e6f4' }}>
            <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', mt: 2 }}>
              Please Log In
            </Typography>
          </Box>
          <Box p={3}>
            <form onSubmit={handleSubmit}>
              <Box>
                <InputLabel>
                  <Typography variant="subtitle2" gutterBottom color={common.black}>
                    Email Address
                  </Typography>
                </InputLabel>
                <TextField
                 type='email' size='small' placeholder='Enter Here'
                 name='email'
                 fullWidth
                 value={values.email}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 error={touched.email && Boolean(errors.email)}
                 helperText={touched.email && errors.email?.toString()}
                 inputProps={{
                   style: { color: '#252525' }, 
                }}
                />
              </Box>
              <Box mt={3}>
                <InputLabel >
                  <Typography variant="subtitle2" gutterBottom color={common.black}>
                    Password
                  </Typography>
                </InputLabel>
                <TextField
                  fullWidth
                  value={values.password}
                 onChange={handleChange}
                 onBlur={handleBlur}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  aria-invalid={errors.password ? "true" : "false"}

                />
              </Box>
              <Box sx={{ textAlign: 'center',mt:4 }}>
                <Button type="submit" variant="contained" sx={{ mt: 2, width: 300, borderRadius: 5,textTransform:"none" }} color="success" >Log In</Button>
                <Typography variant="body2" gutterBottom pt={3} color='primary'>
                  Forget your password? | Login Help| How do I get an account?
                </Typography>
              </Box>
            </form>
          </Box>

        </Paper>
      </Box>
    </Box>
  )
}
 
export default SignInPage