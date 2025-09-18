// import React from 'react';
// import { Box, Typography, Button, Grid, Card, Chip, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
// import { motion } from 'framer-motion';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PersonIcon from '@mui/icons-material/Person';
// import StarIcon from '@mui/icons-material/Star';
// import ScheduleIcon from '@mui/icons-material/Schedule';
// import EventIcon from '@mui/icons-material/Event';


// export default function Home() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box sx={{ bgcolor: "#000", color: "#fff", minHeight: "100vh", py: 2, px: 1 }}>
//       {/* Profile Section */}
//       <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
//         <Box sx={{
//           bgcolor: '#111',
//           color: '#fff',
//           py: { xs: 2, md: 4 },
//           px: { xs: 1, md: 3 },
//           borderRadius: 2,
//           boxShadow: '0 4px 12px rgba(255,255,0,0.2)',
//           maxWidth: 1000,
//           mx: 'auto'
//         }}>
//           {/* Profile Card */}
//           <Card sx={{
//             p: { xs: 2, md: 3 },
//             mb: 3,
//             border: '1px solid #FFD700',
//             bgcolor: "#000",
//             color: "#fff",
//             overflow: 'visible'
//           }}>
//             <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', mb: 2 }}>
//               {/* Profile Image */}
//               <Box
//                 component="img"
//                 src={arpanaJainImage}
//                 alt="Arpana Jain - Career Counselor"
//                 sx={{
//                   width: { xs: 80, md: 100 },
//                   height: { xs: 80, md: 100 },
//                   borderRadius: '50%',
//                   objectFit: 'cover',
//                   border: '2px solid #FFD700',
//                   mr: { md: 3 },
//                   mb: { xs: 1, md: 0 }
//                 }}
//                 onError={(e) => {
//                   e.target.src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80';
//                 }}
//               />

//               <Box sx={{ textAlign: { xs: 'center', md: 'left' }, mt: { xs: 1, md: 0 } }}>
//                 <Typography variant="h5" sx={{
//                   fontWeight: 700,
//                   color: "#FFD700",
//                   fontSize: { xs: '1.4rem', md: '1.5rem' }
//                 }}>
//                   Arpana Jain
//                 </Typography>
//                 <Box sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: { xs: 'center', md: 'flex-start' },
//                   mt: 0.5
//                 }}>
//                   {[...Array(5)].map((_, i) => (
//                     <StarIcon key={i} sx={{ color: '#FFD700', fontSize: { xs: 18, md: 20 } }} />
//                   ))}
//                 </Box>
//                 <Typography variant="body2" sx={{ color: '#ccc', mt: 0.5, fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
//                   <LocationOnIcon sx={{ fontSize: 14, verticalAlign: 'text-bottom', color: "#FFD700" }} />
//                   381 Reviews
//                 </Typography>
//                 <Typography variant="body1" sx={{ mt: 1, fontSize: { xs: '0.9rem', md: '1rem' } }}>
//                   Certified Career Counselor in Indore and NLP Practitioner
//                 </Typography>
//               </Box>
//             </Box>

//             {/* Location + Audience */}
//             <Grid container spacing={1} sx={{ mt: 1 }}>
//               <Grid item xs={12} sm={6}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <LocationOnIcon sx={{ fontSize: { xs: 16, md: 18 }, mr: 1, color: '#FFD700' }} />
//                   <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
//                     <Box component="span" sx={{ fontWeight: 600 }}>Indore | Ujjain | Dewas</Box>
//                   </Typography>
//                 </Box>
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <PersonIcon sx={{ fontSize: { xs: 16, md: 18 }, mr: 1, color: '#FFD700' }} />
//                   <Typography variant="body2" sx={{ fontSize: { xs: '0.8rem', md: '0.875rem' } }}>
//                     <Box component="span" sx={{ fontWeight: 600 }}>Professionals | Students</Box>
//                   </Typography>
//                 </Box>
//               </Grid>
//             </Grid>

//             {/* Experience and Sessions */}
//             <Box sx={{
//               display: 'flex',
//               flexWrap: 'wrap',
//               gap: 1,
//               my: 2,
//               justifyContent: { xs: 'center', md: 'flex-start' }
//             }}>
//               <Chip
//                 icon={<EventIcon sx={{ color: "#FFD700 !important", fontSize: { xs: 16, md: 20 } }} />}
//                 label="Experience: 15 yrs"
//                 variant="outlined"
//                 sx={{
//                   fontWeight: 600,
//                   px: 1,
//                   borderColor: "#FFD700",
//                   color: "#FFD700",
//                   fontSize: { xs: '0.7rem', md: '0.8rem' },
//                   height: { xs: 28, md: 32 }
//                 }}
//               />
//               <Chip
//                 icon={<PersonIcon sx={{ color: "#FFD700 !important", fontSize: { xs: 16, md: 20 } }} />}
//                 label="1441 Sessions"
//                 variant="outlined"
//                 sx={{
//                   fontWeight: 600,
//                   px: 1,
//                   borderColor: "#FFD700",
//                   color: "#FFD700",
//                   fontSize: { xs: '0.7rem', md: '0.8rem' },
//                   height: { xs: 28, md: 32 }
//                 }}
//               />
//             </Box>

//             {/* Availability */}
//             <Box sx={{
//               mb: 2,
//               p: { xs: 1.5, md: 2 },
//               bgcolor: '#111',
//               borderRadius: 1
//             }}>
//               <Typography variant="body1" sx={{
//                 fontWeight: 600,
//                 display: 'flex',
//                 alignItems: 'center',
//                 fontSize: { xs: '0.85rem', md: '1rem' }
//               }}>
//                 <ScheduleIcon sx={{ mr: 1, fontSize: { xs: 18, md: 20 }, color: "#FFD700" }} />
//                 Available On: Wednesday, 9:00 AM to 6:00 PM
//                 <Box component="span" sx={{ color: '#FFD700', ml: 1, fontWeight: 500 }}>
//                   See More ➤
//                 </Box>
//               </Typography>
//             </Box>

//             {/* Services List */}
//             <List sx={{ mb: 2, py: 0 }}>
//               {[
//                 "Mottivational Session",
//                 "1 Hour Counselling Duration",
//                 "6 Month Post Counselling Support",
//                 "College Details",
//                 "Exam Details",
//                 "Behavioral Counselling"
//               ].map((text, index) => (
//                 <ListItem key={index} sx={{ px: 0, py: 0.25 }}>
//                   <ListItemIcon sx={{ minWidth: 28 }}>
//                     <CheckCircleIcon sx={{ color: '#FFD700', fontSize: { xs: 18, md: 20 } }} />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={text}
//                     sx={{
//                       color: "#fff",
//                       '& .MuiTypography-root': {
//                         fontSize: { xs: '0.8rem', md: '0.875rem' }
//                       }
//                     }}
//                   />
//                 </ListItem>
//               ))}
//             </List>

//             {/* Book Appointment Button */}
//             <Button
//               variant="contained"
//               fullWidth
//               sx={{
//                 py: { xs: 1, md: 1.5 },
//                 bgcolor: '#FFD700',
//                 color: '#000',
//                 fontWeight: 600,
//                 fontSize: { xs: '0.9rem', md: '1.1rem' },
//                 ':hover': { bgcolor: '#e6c200' }
//               }}
//             >
//               Book Appointment
//             </Button>
//           </Card>
//         </Box>
//       </motion.div>

//       Services grid
//       <Grid container spacing={2} sx={{ mt: 3 }}>
//         <Grid item xs={12} md={4}>
//           <Box sx={{ p: 2, border: '1px solid #FFD700', borderRadius: 2, bgcolor: "#111", color: "#FFD700" }}>
//             <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Career Test</Typography>
//             <Typography variant="body2" sx={{ mt: 1, color: "#fff", fontSize: { xs: '0.8rem', md: '0.875rem' } }}>Discover strengths & interests.</Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Box sx={{ p: 2, border: '1px solid #FFD700', borderRadius: 2, bgcolor: "#111", color: "#FFD700" }}>
//             <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Student Counselling</Typography>
//             <Typography variant="body2" sx={{ mt: 1, color: "#fff", fontSize: { xs: '0.8rem', md: '0.875rem' } }}>One-on-one mentoring.</Typography>
//           </Box>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Box sx={{ p: 2, border: '1px solid #FFD700', borderRadius: 2, bgcolor: "#111", color: "#FFD700" }}>
//             <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>Parent Guidance</Typography>
//             <Typography variant="body2" sx={{ mt: 1, color: "#fff", fontSize: { xs: '0.8rem', md: '0.875rem' } }}>Support for families.</Typography>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }


import React from 'react';
import { 
  Box, Typography, Button, Grid, Card, Chip, 
  List, ListItem, ListItemIcon, ListItemText, 
  useTheme, useMediaQuery, Container, Stack, 
  Avatar, Rating, Divider 
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  CheckCircle, LocationOn, Person, Star,
  Schedule, Event, Psychology, School, 
  FamilyRestroom, AutoStories, Public, 
  TrendingUp, SupportAgent, Groups
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import arpanaJainImage from './images/arpana-jain.jpg';

// Pulsing animation for CTA elements
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Services data for mapping
  const services = [
    { 
      icon: <Psychology sx={{ fontSize: 40, color: '#FFD700' }} />, 
      title: "Career Test", 
      description: "Discover your strengths & interests with our comprehensive assessment" 
    },
    { 
      icon: <School sx={{ fontSize: 40, color: '#FFD700' }} />, 
      title: "Student Counselling", 
      description: "One-on-one mentoring for academic and career success" 
    },
    { 
      icon: <FamilyRestroom sx={{ fontSize: 40, color: '#FFD700' }} />, 
      title: "Parent Guidance", 
      description: "Expert support for families navigating education choices" 
    },
    { 
      icon: <AutoStories sx={{ fontSize: 40, color: '#FFD700' }} />, 
      title: "College Admissions", 
      description: "Guidance for selecting and applying to the right colleges" 
    },
    { 
      icon: <Public sx={{ fontSize: 40, color: '#FFD700' }} />, 
      title: "Study Abroad", 
      description: "Assistance with international education opportunities" 
    },
    { 
      icon: <TrendingUp sx={{ fontSize: 40, color: '#FFD700' }} />, 
      title: "Career Growth", 
      description: "Strategies for professional development and advancement" 
    },
  ];

  return (
    <Box sx={{ 
      bgcolor: "#000", 
      color: "#fff", 
      minHeight: "100vh", 
      py: { xs: 2, sm: 3, md: 4 },
      px: { xs: 1, sm: 2 },
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))'
    }}>
      <Container maxWidth="lg">
        {/* Profile Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card sx={{
            p: { xs: 2, sm: 3, md: 4 },
            mb: { xs: 3, md: 4 },
            border: '2px solid #FFD700',
            bgcolor: "transparent",
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8))',
            color: "#fff",
            overflow: 'visible',
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(255, 215, 0, 0.2)',
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #FFD700, #000, #FFD700)',
              borderRadius: '2px 2px 0 0'
            }
          }}>
            <Grid container spacing={3}>
              {/* Profile Image and Basic Info */}
              <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar
                 src={arpanaJainImage}
                  alt="Arpana Jain - Career Counselor"
                  sx={{
                    width: { xs: 120, sm: 140, md: 160 },
                    height: { xs: 120, sm: 140, md: 160 },
                    border: '3px solid #FFD700',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
                    mb: 2
                  }}
                />
                
                <Box sx={{ textAlign: 'center', width: '100%' }}>
                  <Typography variant="h4" sx={{
                    fontWeight: 700,
                    color: "#FFD700",
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                    mb: 1
                  }}>
                    Arpana Jain
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    <Rating 
                      value={5} 
                      readOnly 
                      sx={{ 
                        color: '#FFD700',
                        '& .MuiRating-icon': { fontSize: { xs: 18, sm: 20, md: 24 } }
                      }} 
                    />
                    <Typography variant="body2" sx={{ color: '#ccc', ml: 1 }}>
                      4.9 (381 Reviews)
                    </Typography>
                  </Box>
                  
                  <Typography variant="body1" sx={{ 
                    color: '#fff', 
                    fontSize: { xs: '0.9rem', sm: '1rem' },
                    mb: 2
                  }}>
                    Certified Career Counselor & NLP Practitioner
                  </Typography>
                </Box>
              </Grid>

              {/* Details Section */}
              <Grid item xs={12} md={8}>
                <Stack spacing={2}>
                  {/* Location and Audience */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    gap: 2 
                  }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                      <LocationOn sx={{ fontSize: { xs: 20, md: 24 }, mr: 1, color: '#FFD700' }} />
                      <Box>
                        <Typography variant="body2" sx={{ color: '#ccc' }}>Serving</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: '#FFD700' }}>
                          Indore | Ujjain | Dewas
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                      <Groups sx={{ fontSize: { xs: 20, md: 24 }, mr: 1, color: '#FFD700' }} />
                      <Box>
                        <Typography variant="body2" sx={{ color: '#ccc' }}>Specializing In</Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, color: '#FFD700' }}>
                          Professionals & Students
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Divider sx={{ borderColor: '#333' }} />

                  {/* Experience and Sessions */}
                  <Box sx={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: 1,
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                  }}>
                    <Chip
                      icon={<Event sx={{ color: "#FFD700 !important" }} />}
                      label="15+ Years Experience"
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        px: 1,
                        borderColor: "#FFD700",
                        color: "#FFD700",
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        height: { xs: 32, sm: 36 }
                      }}
                    />
                    <Chip
                      icon={<SupportAgent sx={{ color: "#FFD700 !important" }} />}
                      label="1441+ Sessions"
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        px: 1,
                        borderColor: "#FFD700",
                        color: "#FFD700",
                        fontSize: { xs: '0.8rem', sm: '0.9rem' },
                        height: { xs: 32, sm: 36 }
                      }}
                    />
                  </Box>

                  {/* Availability */}
                  <Box sx={{
                    p: 2,
                    bgcolor: 'rgba(255, 215, 0, 0.1)',
                    borderRadius: 1,
                    border: '1px solid rgba(255, 215, 0, 0.3)'
                  }}>
                    <Typography variant="body1" sx={{
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      fontSize: { xs: '0.9rem', sm: '1rem' }
                    }}>
                      <Schedule sx={{ mr: 1, fontSize: { xs: 20, md: 24 }, color: "#FFD700" }} />
                      Available: Wednesday, 9:00 AM to 6:00 PM
                      <Box component="span" sx={{ color: '#FFD700', ml: 1, fontWeight: 500 }}>
                        See More ➤
                      </Box>
                    </Typography>
                  </Box>

                  {/* Services List */}
                  <Box>
                    <Typography variant="h6" sx={{ 
                      color: '#FFD700', 
                      mb: 1,
                      fontSize: { xs: '1rem', sm: '1.1rem' }
                    }}>
                      What I Offer:
                    </Typography>
                    <Grid container spacing={1}>
                      {[
                        "Motivational Sessions",
                        "1-Hour Counselling Duration",
                        "6-Month Post-Counselling Support",
                        "College Selection Guidance",
                        "Exam Preparation Strategies",
                        "Behavioral Counselling"
                      ].map((text, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircle sx={{ color: '#FFD700', fontSize: { xs: 18, sm: 20 }, mr: 1 }} />
                            <Typography variant="body2" sx={{ color: "#fff", fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
                              {text}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* Book Appointment Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      py: { xs: 1.5, sm: 2 },
                      bgcolor: '#FFD700',
                      color: '#000',
                      fontWeight: 700,
                      fontSize: { xs: '1rem', sm: '1.1rem' },
                      ':hover': { 
                        bgcolor: '#e6c200',
                        animation: `${pulse} 1s infinite`
                      },
                      borderRadius: 1,
                      boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
                    }}
                  >
                    Book Your Appointment Now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </motion.div>

        {/* Services Section */}
        <Typography variant="h3" sx={{ 
          textAlign: 'center', 
          color: '#FFD700', 
          mb: 4,
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          fontWeight: 700
        }}>
          Our Services
        </Typography>
        
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ 
                  p: 3, 
                  height: '100%',
                  bgcolor: 'rgba(17, 17, 17, 0.7)',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  borderRadius: 2,
                  color: "#FFD700",
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 8px 24px rgba(255, 215, 0, 0.2)',
                    borderColor: '#FFD700'
                  }
                }}>
                  <Box sx={{ textAlign: 'center', mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" sx={{ 
                    textAlign: 'center', 
                    mb: 2,
                    fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' }
                  }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    textAlign: 'center', 
                    color: "#fff",
                    fontSize: { xs: '0.85rem', sm: '0.9rem' }
                  }}>
                    {service.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials/CTA Section */}
        <Box sx={{ 
          mt: 6, 
          p: { xs: 2, sm: 3, md: 4 },
          bgcolor: 'rgba(255, 215, 0, 0.1)',
          border: '1px solid rgba(255, 215, 0, 0.3)',
          borderRadius: 2,
          textAlign: 'center'
        }}>
          <Typography variant="h4" sx={{ 
            color: '#FFD700', 
            mb: 2,
            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.2rem' }
          }}>
            Ready to Transform Your Career Path?
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#fff', 
            mb: 3,
            fontSize: { xs: '0.9rem', sm: '1rem' },
            maxWidth: '800px',
            mx: 'auto'
          }}>
            Join hundreds of satisfied students and professionals who have found their ideal career path with personalized counseling sessions.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              px: 4,
              bgcolor: '#FFD700',
              color: '#000',
              fontWeight: 700,
              fontSize: { xs: '1rem', sm: '1.1rem' },
              ':hover': { 
                bgcolor: '#e6c200',
                animation: `${pulse} 1s infinite`
              },
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
            }}
          >
            Get Started Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
}