// import React from 'react';
// import { Box, Typography, Card, Grid, Container, Button, Stack, Paper, Fade, Zoom } from '@mui/material';
// import heroImage from './images/hero-students.jpg';

// const Home = () => {
//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>
//       {/* Hero Section - Enhanced Red Theme */}
//       <Box sx={{ 
//         bgcolor: "#9e5349ff", 
//         py: 8,
//         background: "linear-gradient(135deg, #9e5349ff 0%, #7a3a32 100%)",
//         position: "relative",
//         overflow: "hidden",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "radial-gradient(circle at 20% 80%, rgba(248, 232, 0, 0.15) 0%, transparent 50%)",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6} alignItems="center">
//             {/* Left Content */}
//             <Grid item xs={12} md={6}>
//               <Fade in={true} timeout={1000}>
//                 <Box>
//                   <Typography
//                     variant="h3"
//                     sx={{
//                       fontWeight: 800,
//                       mb: 3,
//                       fontSize: { xs: "2.2rem", md: "3.2rem" },
//                       color: "#ffffff",
//                       lineHeight: 1.2,
//                       textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Discover Your <span style={{ color: "#f8e800ff" }}>Potential</span> <br />
//                     Design Your <span style={{ color: "#1be700ff" }}>Career</span>
//                   </Typography>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 4,
//                       color: "rgba(255,255,255,0.9)",
//                       fontSize: "1.1rem",
//                       lineHeight: 1.7,
//                       fontWeight: 400,
//                       background: "rgba(0,0,0,0.2)",
//                       p: 2,
//                       borderRadius: 2,
//                       borderLeft: "4px solid #f8e800ff"
//                     }}
//                   >
//                     Navigate the competitive world with strategic career planning. Our certified counselors and AI technology provide the edge you need for success.
//                   </Typography>

//                   {/* Features List */}
//                   <Box sx={{ mb: 4 }}>
//                     {["Expert Career Counselors", "Certified Professionals", "Comprehensive Career Tests"].map((feature, index) => (
//                       <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
//                         <Box sx={{ 
//                           width: 8, 
//                           height: 8, 
//                           bgcolor: "#f8e800ff", 
//                           borderRadius: "50%", 
//                           mr: 2,
//                           boxShadow: "0 0 10px #f8e800ff"
//                         }} />
//                         <Typography variant="body1" sx={{ fontWeight: 600, color: "#ffffff", fontSize: "1rem" }}>
//                           {feature}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>

//                   {/* Buttons */}
//                   <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 6 }}>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         bgcolor: "#f8e800ff",
//                         color: "black",
//                         fontWeight: 800,
//                         px: 4,
//                         py: 1.5,
//                         borderRadius: 3,
//                         fontSize: "1rem",
//                         textTransform: 'none',
//                         boxShadow: "0 4px 15px rgba(248, 232, 0, 0.4)",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           bgcolor: "#1be700ff",
//                           transform: "translateY(-3px)",
//                           boxShadow: "0 6px 20px rgba(27, 231, 0, 0.5)",
//                         },
//                       }}
//                     >
//                       PSYCHOMETRIC TEST
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         borderColor: "#f8e800ff",
//                         color: "#f8e800ff",
//                         fontWeight: 700,
//                         px: 4,
//                         py: 1.5,
//                         borderRadius: 3,
//                         fontSize: "1rem",
//                         textTransform: 'none',
//                         "&:hover": {
//                           borderColor: "#1be700ff",
//                           color: "#1be700ff",
//                           bgcolor: "rgba(27, 231, 0, 0.1)",
//                           transform: "translateY(-3px)",
//                         },
//                       }}
//                     >
//                       Schedule Consultation
//                     </Button>
//                   </Stack>

//                   {/* Stats */}
//                   <Grid container spacing={4} sx={{ textAlign: "center" }}>
//                     {[
//                       { value: "10000+", label: "Students Guided" },
//                       { value: "99%", label: "Success Rate" },
//                       { value: "10+", label: "Years Experience" }
//                     ].map((stat, index) => (
//                       <Grid item xs={4} key={index}>
//                         <Typography variant="h4" sx={{ 
//                           fontWeight: 900, 
//                           color: "#10e63eff", 
//                           mb: 1, 
//                           fontSize: "2.5rem",
//                           textShadow: "0 0 10px rgba(16, 230, 62, 0.5)"
//                         }}>
//                           {stat.value}
//                         </Typography>
//                         <Typography variant="body2" sx={{ 
//                           color: "#ffffff", 
//                           fontWeight: 600, 
//                           fontSize: "0.9rem",
//                           opacity: 0.9
//                         }}>
//                           {stat.label}
//                         </Typography>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               </Fade>
//             </Grid>

//             {/* Right Image */}
//             <Grid item xs={12} md={6}>
//               <Zoom in={true} timeout={1000} style={{ transitionDelay: '300ms' }}>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     height: { xs: 400, md: 500 },
//                     borderRadius: 4,
//                     overflow: "hidden",
//                     boxShadow: "0 20px 40px rgba(238, 234, 10, 0.5), 0 0 100px rgba(248, 232, 0, 0.2)",
//                     backgroundImage: `url(${heroImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     position: "relative",
//                     "&::before": {
//                       content: '""',
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: "linear-gradient(45deg, rgba(158, 83, 73, 0.2) 0%, rgba(248, 232, 0, 0.1) 100%)",
//                       zIndex: 1,
//                     }
//                   }}
//                 />
//               </Zoom>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Services Section - Enhanced Theme */}
//       <Box sx={{ 
//         py: 8, 
//         bgcolor: "#5ebeb6ff",
//         background: "linear-gradient(135deg, #5ebeb6ff 0%, #4a9c96 100%)",
//         position: "relative",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: "4px",
//           background: "linear-gradient(90deg, #f3ad17ff, #1be700ff, #f8e800ff)",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Fade in={true} timeout={800}>
//             <Typography
//               variant="h4"
//               align="center"
//               sx={{
//                 fontWeight: 800,
//                 mb: 6,
//                 fontSize: { xs: "1.8rem", md: "2.8rem" },
//                 color: "#f3ad17ff",
//                 textShadow: "0 2px 4px rgba(0,0,0,0.2)",
//                 position: "relative",
//                 display: "inline-block",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -10,
//                   left: "20%",
//                   width: "60%",
//                   height: "4px",
//                   background: "linear-gradient(90deg, transparent, #f3ad17ff, transparent)",
//                   borderRadius: 2,
//                 }
//               }}
//             >
//               Let's Turn Your Potential Into A Powerful Career
//             </Typography>
//           </Fade>

//           <Grid container spacing={4} justifyContent="center">
//             {[
//               {
//                 title: "Face To Face",
//                 subtitle: "Offline Counseling",
//                 bgImage: "url('https://media.istockphoto.com/id/1320034911/vector/patient-with-psychologist.jpg?s=1024x1024&w=is&k=20&c=Km4sTsT5y63rJiFgFl6NmPW4J2KzQK8AJec5KKuaXSA=')",
//                 color: "#4CAF50"
//               },
//               {
//                 title: "Online Counselling",
//                 subtitle: "Virtual Sessions",
//                 bgImage: "url('https://media.istockphoto.com/id/1257527796/vector/sad-man-making-video-call-with-female-psychologist-by-computer.jpg?s=1024x1024&w=is&k=20&c=ycgk78JXX2bSwzP9Hdr4W1itnlydLFF0Dgj2q2_7f4Y=')",
//                 color: "#2196F3"
//               },
//               {
//                 title: "Career Assessment",
//                 subtitle: "(Discover Yourself)",
//                 bgImage: "url('https://media.istockphoto.com/id/1036557512/vector/hands-with-pen-fill-survey-or-exam-forms.jpg?s=1024x1024&w=is&k=20&c=hmoG8_dmkbsCteCmM4aOR-Hf3Vp9U3D0Eq0VAHbHW08=')",
//                 color: "#FF9800"
//               },
//               {
//                 title: "College Counselling",
//                 subtitle: " (Domestic & Abroad)",
//                 bgImage: "url('https://media.istockphoto.com/id/1288538088/vector/college-students-campus-life.jpg?s=1024x1024&w=is&k=20&c=ZQv0z7V7w7Q6Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q=')",
//                 color: "#00b3c0ff"
//               },
//             ].map((card, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Zoom in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
//                   <Card
//                     sx={{
//                       height: { xs: 250, md: 320 },
//                       backgroundImage: card.bgImage,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       borderRadius: 4,
//                       position: "relative",
//                       overflow: "hidden",
//                       boxShadow: `0 8px 25px ${card.color}40, 0 0 0 1px rgba(255,255,255,0.1)`,
//                       transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                       cursor: "pointer",
//                       "&:hover": {
//                         transform: "translateY(-10px) scale(1.02)",
//                         boxShadow: `0 20px 40px ${card.color}60, 0 0 30px ${card.color}30`,
//                         "& .service-content": {
//                           background: "rgba(255, 255, 255, 0.95)",
//                           transform: "translateY(0)",
//                         }
//                       },
//                       display: "flex",
//                       alignItems: "flex-end",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: `linear-gradient(to top, ${card.color}DD, ${card.color}40)`,
//                         zIndex: 1,
//                       }}
//                     />
//                     <Box
//                       className="service-content"
//                       sx={{
//                         position: "relative",
//                         zIndex: 2,
//                         width: "100%",
//                         p: { xs: 2, md: 3 },
//                         background: "rgba(255, 255, 255, 0.85)",
//                         backdropFilter: "blur(10px)",
//                         borderRadius: "0 0 16px 16px",
//                         transition: "all 0.3s ease",
//                         transform: "translateY(5px)",
//                       }}
//                     >
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 800,
//                           mb: 1,
//                           fontSize: { xs: "1.3rem", md: "1.5rem" },
//                           color: card.color,
//                           display: "inline-block",
//                           textShadow: "0 1px 2px rgba(0,0,0,0.1)",
//                         }}
//                       >
//                         {card.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           fontWeight: 600,
//                           fontSize: { xs: "0.9rem", md: "1rem" },
//                           color: "#333",
//                           opacity: 0.9,
//                         }}
//                       >
//                         {card.subtitle}
//                       </Typography>
//                     </Box>
//                   </Card>
//                 </Zoom>
//               </Grid>
//             ))}
//           </Grid>

//           {/* CTA Section */}
//           <Fade in={true} timeout={1000} style={{ transitionDelay: '800ms' }}>
//             <Box sx={{ textAlign: "center", mt: 8 }}>
//               <Typography variant="h5" sx={{ 
//                 fontWeight: 700, 
//                 mb: 3, 
//                 color: "#fff",
//                 textShadow: "0 2px 4px rgba(0,0,0,0.3)"
//               }}>
//                 Ready to Start Your Journey?
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: "#f3ad17ff",
//                   color: "black",
//                   fontWeight: 800,
//                   px: 6,
//                   py: 1.5,
//                   borderRadius: 3,
//                   fontSize: "1.1rem",
//                   textTransform: 'none',
//                   boxShadow: "0 4px 15px rgba(243, 173, 23, 0.4)",
//                   "&:hover": {
//                     bgcolor: "#f8e800ff",
//                     transform: "translateY(-2px)",
//                     boxShadow: "0 6px 20px rgba(248, 232, 0, 0.5)",
//                   },
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 Get Started Today
//               </Button>
//             </Box>
//           </Fade>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


// import React from 'react';
// import { Box, Typography, Card, Grid, Container, Button, Stack, Paper, Fade, Zoom } from '@mui/material';
// import heroImage from './images/hero-students.jpg';

// const Home = () => {
//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>
//       {/* Hero Section - Enhanced Red Theme */}
//       <Box sx={{ 
//         bgcolor: "#9e5349ff", 
//         py: 8,
//         background: "linear-gradient(135deg, #9e5349ff 0%, #7a3a32 100%)",
//         position: "relative",
//         overflow: "hidden",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "radial-gradient(circle at 20% 80%, rgba(248, 232, 0, 0.15) 0%, transparent 50%)",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6} alignItems="center">
//             {/* Left Content */}
//             <Grid item xs={12} md={6}>
//               <Fade in={true} timeout={1000}>
//                 <Box>
//                   <Typography
//                     variant="h3"
//                     sx={{
//                       fontWeight: 800,
//                       mb: 3,
//                       fontSize: { xs: "2.2rem", md: "3.2rem" },
//                       color: "#ffffff",
//                       lineHeight: 1.1,
//                       textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Discover Your <span style={{ color: "#f8e800ff" }}>Potential</span> <br />
//                     Design Your <span style={{ color: "#1be700ff" }}>Career</span>
//                   </Typography>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 4,
//                       color: "rgba(255,255,255,0.9)",
//                       fontSize: "1.2rem",
//                       lineHeight: 1.7,
//                       fontWeight: 400,
//                       background: "rgba(0,0,0,0.2)",
//                       p: 2,
//                       borderRadius: 2,
//                       borderLeft: "4px solid #f8e800ff"
//                     }}
//                   >
//                     Navigate the competitive world with strategic career planning. Our certified counselors and AI technology provide the edge you need for success.
//                   </Typography>

//                   {/* Features List */}
//                   <Box sx={{ mb: 4 }}>
//                     {["Expert Career Counselors", "Certified Professionals", "Comprehensive Career Tests"].map((feature, index) => (
//                       <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                         <Box sx={{
//                           width: 8,
//                           height: 8,
//                           bgcolor: "#f8e800ff",
//                           borderRadius: "50%",
//                           mr: 2,
//                           boxShadow: "0 0 10px #f8e800ff"
//                         }} />
//                         <Typography variant="body1" sx={{ fontWeight: 600, color: "#ffffff", fontSize: "1.1rem" }}>
//                           {feature}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>

//                   {/* Buttons */}
//                   <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 6 }}>
//                     <Zoom in={true} timeout={800} style={{ transitionDelay: '200ms' }}>
//                       <Button
//                         variant="contained"
//                         sx={{
//                           bgcolor: "#f8e800ff",
//                           color: "black",
//                           fontWeight: 800,
//                           px: 5,
//                           py: 1.8,
//                           borderRadius: 3,
//                           fontSize: "1.1rem",
//                           textTransform: 'none',
//                           boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
//                           transition: "all 0.3s ease",
//                           "&:hover": {
//                             bgcolor: "#1be700ff",
//                             transform: "translateY(-3px)",
//                             boxShadow: "0 12px 25px rgba(27, 231, 0, 0.5)",
//                           },
//                         }}
//                       >
//                         🧠 PSYCHOMETRIC TEST
//                       </Button>
//                     </Zoom>
//                     <Zoom in={true} timeout={800} style={{ transitionDelay: '400ms' }}>
//                       <Button
//                         variant="outlined"
//                         sx={{
//                           border: "2px solid #f8e800ff",
//                           color: "#f8e800ff",
//                           fontWeight: 800,
//                           px: 5,
//                           py: 1.8,
//                           borderRadius: 3,
//                           fontSize: "1.1rem",
//                           textTransform: 'none',
//                           background: "rgba(248, 232, 0, 0.1)",
//                           transition: "all 0.3s ease",
//                           "&:hover": {
//                             bgcolor: "#f8e800ff",
//                             color: "black",
//                             border: "2px solid #f8e800ff",
//                             transform: "translateY(-3px)",
//                             boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
//                           },
//                         }}
//                       >
//                         📅 Schedule Consultation
//                       </Button>
//                     </Zoom>
//                   </Stack>

//                   {/* Stats */}
//                   <Grid container spacing={4} sx={{ textAlign: "center" }}>
//                     {[
//                       { number: "10000+", label: "Students Guided" },
//                       { number: "99%", label: "Success Rate" },
//                       { number: "10+", label: "Years Experience" }
//                     ].map((stat, index) => (
//                       <Grid item xs={4} key={index}>
//                         <Fade in={true} timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
//                           <Box>
//                             <Typography variant="h4" sx={{ 
//                               fontWeight: 900, 
//                               color: "#10e63eff", 
//                               mb: 1, 
//                               fontSize: "2.5rem",
//                               textShadow: "0 2px 8px rgba(16, 230, 62, 0.4)"
//                             }}>
//                               {stat.number}
//                             </Typography>
//                             <Typography variant="body2" sx={{ 
//                               color: "#ffffff", 
//                               fontWeight: 600, 
//                               fontSize: "0.9rem",
//                               background: "rgba(255,255,255,0.1)",
//                               p: 0.5,
//                               borderRadius: 1
//                             }}>
//                               {stat.label}
//                             </Typography>
//                           </Box>
//                         </Fade>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               </Fade>
//             </Grid>

//             {/* Right Image */}
//             <Grid item xs={12} md={6}>
//               <Zoom in={true} timeout={1000}>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     height: { xs: 400, md: 550 },
//                     borderRadius: 4,
//                     overflow: "hidden",
//                     boxShadow: "0 25px 50px rgba(238, 234, 10, 0.3)",
//                     backgroundImage: `url(${heroImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     position: "relative",
//                     "&::before": {
//                       content: '""',
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: "linear-gradient(45deg, rgba(158, 83, 73, 0.2) 0%, rgba(248, 232, 0, 0.1) 100%)",
//                       zIndex: 1,
//                     }
//                   }}
//                 />
//               </Zoom>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Services Section - Enhanced Theme */}
//       <Box sx={{ 
//         py: 8, 
//         bgcolor: "#5ebeb6ff",
//         background: "linear-gradient(135deg, #5ebeb6ff 0%, #4a9c94 100%)",
//         position: "relative",
//         overflow: "hidden",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: -50,
//           right: -50,
//           width: 200,
//           height: 200,
//           background: "radial-gradient(circle, rgba(243, 173, 23, 0.2) 0%, transparent 70%)",
//           borderRadius: "50%",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Fade in={true} timeout={800}>
//             <Typography
//               variant="h4"
//               align="center"
//               sx={{
//                 fontWeight: 800,
//                 mb: 6,
//                 fontSize: { xs: "1.8rem", md: "2.8rem" },
//                 color: "#f3ad17ff",
//                 textShadow: "0 2px 8px rgba(243, 173, 23, 0.3)",
//                 position: "relative",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -10,
//                   left: "50%",
//                   transform: "translateX(-50%)",
//                   width: 100,
//                   height: 4,
//                   background: "linear-gradient(90deg, transparent, #f3ad17ff, transparent)",
//                   borderRadius: 2,
//                 }
//               }}
//             >
//               Let's Turn Your Potential Into A Powerful Career
//             </Typography>
//           </Fade>

//           <Grid container spacing={4} justifyContent="center">
//             {[
//               {
//                 title: "Face To Face",
//                 subtitle: "Offline Counseling",
//                 bgImage: "url('https://media.istockphoto.com/id/1320034911/vector/patient-with-psychologist.jpg?s=1024x1024&w=is&k=20&c=Km4sTsT5y63rJiFgFl6NmPW4J2KzQK8AJec5KKuaXSA=')",
//                 color: "#4CAF50",
//                 icon: "👥"
//               },
//               {
//                 title: "Online Counselling",
//                 subtitle: "Virtual Sessions",
//                 bgImage: "url('https://media.istockphoto.com/id/1257527796/vector/sad-man-making-video-call-with-female-psychologist-by-computer.jpg?s=1024x1024&w=is&k=20&c=ycgk78JXX2bSwzP9Hdr4W1itnlydLFF0Dgj2q2_7f4Y=')",
//                 color: "#2196F3",
//                 icon: "💻"
//               },
//               {
//                 title: "Career Assessment",
//                 subtitle: "(Discover Yourself)",
//                 bgImage: "url('https://media.istockphoto.com/id/1036557512/vector/hands-with-pen-fill-survey-or-exam-forms.jpg?s=1024x1024&w=is&k=20&c=hmoG8_dmkbsCteCmM4aOR-Hf3Vp9U3D0Eq0VAHbHW08=')",
//                 color: "#FF9800",
//                 icon: "📊"
//               },
//               {
//                 title: "College Counselling",
//                 subtitle: " (Domestic & Abroad)",
//                 bgImage: "url('https://media.istockphoto.com/id/1288538088/vector/college-students-campus-life.jpg?s=1024x1024&w=is&k=20&c=ZQv0z7V7w7Q6Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q5Q=')",
//                 color: "#00b3c0ff",
//                 icon: "🎓"
//               },
//             ].map((card, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 100}ms` }}>
//                   <Card
//                     sx={{
//                       height: { xs: 280, md: 350 },
//                       backgroundImage: card.bgImage,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       borderRadius: 4,
//                       position: "relative",
//                       overflow: "hidden",
//                       boxShadow: `0 10px 30px ${card.color}40`,
//                       transition: "all 0.4s ease",
//                       cursor: "pointer",
//                       ":hover": {
//                         transform: "translateY(-10px) scale(1.02)",
//                         boxShadow: `0 20px 40px ${card.color}60`,
//                         "& .service-icon": {
//                           transform: "scale(1.2) rotate(5deg)",
//                         }
//                       },
//                       display: "flex",
//                       alignItems: "flex-end",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: `linear-gradient(to top, ${card.color}EE, ${card.color}55)`,
//                         zIndex: 1,
//                       }}
//                     />

//                     {/* Icon */}
//                     <Box
//                       className="service-icon"
//                       sx={{
//                         position: "absolute",
//                         top: 20,
//                         right: 20,
//                         fontSize: "3rem",
//                         zIndex: 2,
//                         transition: "all 0.3s ease",
//                         textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                       }}
//                     >
//                       {card.icon}
//                     </Box>

//                     <Box
//                       sx={{
//                         position: "relative",
//                         zIndex: 2,
//                         width: "100%",
//                         p: { xs: 2, md: 3 },
//                         background: "rgba(255, 255, 255, 0.95)",
//                         backdropFilter: "blur(10px)",
//                         borderRadius: "0 0 16px 16px",
//                         borderTop: `4px solid ${card.color}`,
//                       }}
//                     >
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 800,
//                           mb: 1,
//                           fontSize: { xs: "1.3rem", md: "1.6rem" },
//                           color: card.color,
//                           display: "inline-block",
//                         }}
//                       >
//                         {card.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           fontWeight: 600,
//                           fontSize: { xs: "0.9rem", md: "1rem" },
//                           color: "#333",
//                         }}
//                       >
//                         {card.subtitle}
//                       </Typography>
//                     </Box>
//                   </Card>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>

//           {/* CTA Button */}
//           <Fade in={true} timeout={1000}>
//             <Box sx={{ textAlign: "center", mt: 6 }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: "#f3ad17ff",
//                   color: "black",
//                   fontWeight: 800,
//                   px: 6,
//                   py: 1.8,
//                   borderRadius: 3,
//                   fontSize: "1.1rem",
//                   textTransform: 'none',
//                   boxShadow: "0 8px 20px rgba(243, 173, 23, 0.4)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     bgcolor: "#ffc107",
//                     transform: "translateY(-3px)",
//                     boxShadow: "0 12px 25px rgba(243, 173, 23, 0.6)",
//                   },
//                 }}
//               >
//                 Explore All Services →
//               </Button>
//             </Box>
//           </Fade>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


// import React from 'react';
// import { Box, Typography, Card, Grid, Container, Button, Stack, Paper, Fade, Slide } from '@mui/material';
// import heroImage from './images/hero-students.jpg';

// const Home = () => {
//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>


//       {/* Hero Section - Enhanced Red Theme */}
//       <Box sx={{
//         bgcolor: "#9e5349ff",
//         py: 15,
//         background: "linear-gradient(135deg, #9e5349ff 0%, #7a3a32 100%)",
//         position: "relative",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "radial-gradient(circle at 70% 20%, rgba(248, 232, 0, 0.1) 0%, transparent 50%)",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6} alignItems="center">
//             {/* Left Content */}
//             <Grid item xs={12} md={6}>
//               <Fade in={true} timeout={1000}>
//                 <Box>
//                   <Typography
//                     variant="h3"
//                     sx={{
//                       fontWeight: 800,
//                       mb: 3,
//                       fontSize: { xs: "2.2rem", md: "3.2rem" },
//                       color: "#ffffff",
//                       lineHeight: 1.1,
//                       textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Discover Your <span style={{ color: "#f8e800ff" }}>Potential</span> <br />
//                     Design Your <span style={{ color: "#f8e800ff" }}>Career</span>
//                   </Typography>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 4,
//                       color: "rgba(255,255,255,0.9)",
//                       fontSize: "1.2rem",
//                       lineHeight: 1.7,
//                       fontWeight: 400,
//                       maxWidth: "90%",
//                     }}
//                   >
//                     Navigate the competitive world with strategic career planning. Our certified counselors and AI technology provide the edge you need for success.
//                   </Typography>

//                   {/* Enhanced Features List */}
//                   <Box sx={{ mb: 4 }}>
//                     {["Expert Career Counselors", "Certified Professionals", "Comprehensive Career Tests"].map((feature, index) => (
//                       <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                         <Box sx={{
//                           width: 8,
//                           height: 8,
//                           borderRadius: "50%",
//                           bgcolor: "#f8e800ff",
//                           mr: 2,
//                           boxShadow: "0 0 10px #f8e800ff"
//                         }} />
//                         <Typography variant="body1" sx={{
//                           fontWeight: 600,
//                           color: "#ffffff",
//                           fontSize: "1.1rem",
//                           textShadow: "0 1px 2px rgba(0,0,0,0.3)"
//                         }}>
//                           {feature}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>

//                   {/* Enhanced Buttons */}
//                   <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 6 }}>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         bgcolor: "#f8e800ff",
//                         color: "black",
//                         fontWeight: 800,
//                         px: 5,
//                         py: 1.8,
//                         borderRadius: 3,
//                         fontSize: "1.1rem",
//                         textTransform: 'none',
//                         boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           bgcolor: "#1be700ff",
//                           transform: "translateY(-3px)",
//                           boxShadow: "0 12px 25px rgba(27, 231, 0, 0.5)",
//                         },
//                       }}
//                     >
//                       PSYCHOMETRIC TEST
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         border: "2px solid #f8e800ff",
//                         color: "#f8e800ff",
//                         fontWeight: 800,
//                         px: 5,
//                         py: 1.6,
//                         borderRadius: 3,
//                         fontSize: "1.1rem",
//                         textTransform: 'none',
//                         background: "rgba(248, 232, 0, 0.1)",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           bgcolor: "#f8e800ff",
//                           color: "black",
//                           transform: "translateY(-3px)",
//                           boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
//                         },
//                       }}
//                     >
//                       Schedule Consultation
//                     </Button>
//                   </Stack>

//                   {/* Enhanced Stats */}
//                   <Grid container spacing={4} sx={{ textAlign: "center" }}>
//                     {[
//                       { value: "10,000+", label: "Students Guided" },
//                       { value: "99%", label: "Success Rate" },
//                       { value: "10+", label: "Years Experience" }
//                     ].map((stat, index) => (
//                       <Grid item xs={4} key={index}>
//                         <Typography variant="h4" sx={{
//                           fontWeight: 900,
//                           color: "#10e63eff",
//                           mb: 1,
//                           fontSize: "2.8rem",
//                           textShadow: "0 2px 8px rgba(16, 230, 62, 0.4)"
//                         }}>
//                           {stat.value}
//                         </Typography>
//                         <Typography variant="body2" sx={{
//                           color: "#ffffff",
//                           fontWeight: 700,
//                           fontSize: "1rem",
//                           letterSpacing: "0.5px"
//                         }}>
//                           {stat.label}
//                         </Typography>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               </Fade>
//             </Grid>

//             {/* Right Image */}
//             <Grid item xs={12} md={6}>
//               <Slide direction="left" in={true} timeout={800}>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     height: { xs: 400, md: 550 },
//                     borderRadius: 4,
//                     overflow: "hidden",
//                     boxShadow: "0 25px 50px rgba(238, 234, 10, 0.3)",
//                     backgroundImage: `url(${heroImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     position: "relative",
//                     "&::before": {
//                       content: '""',
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: "linear-gradient(45deg, rgba(158, 83, 73, 0.1) 0%, transparent 50%)",
//                       zIndex: 1,
//                     }
//                   }}
//                 />
//               </Slide>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Enhanced Services Section */}
//       <Box sx={{
//         py: 10,
//         bgcolor: "#5ebeb6ff",
//         background: "linear-gradient(135deg, #5ebeb6ff 0%, #4a9a94 100%)",
//         position: "relative",
//         overflow: "hidden",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: -100,
//           right: -100,
//           width: 300,
//           height: 300,
//           borderRadius: "50%",
//           background: "rgba(243, 173, 23, 0.1)",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Fade in={true} timeout={1000}>
//             <Typography
//               variant="h3"
//               align="center"
//               sx={{
//                 fontWeight: 800,
//                 mb: 8,
//                 fontSize: { xs: "2rem", md: "3rem" },
//                 color: "#f3ad17ff",
//                 textShadow: "0 2px 10px rgba(243, 173, 23, 0.3)",
//                 position: "relative",
//                 display: "inline-block",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -10,
//                   left: "10%",
//                   width: "80%",
//                   height: 4,
//                   background: "linear-gradient(90deg, transparent, #f3ad17ff, transparent)",
//                   borderRadius: 2,
//                 }
//               }}
//             >
//               Let's Turn Your Potential Into A Powerful Career
//             </Typography>
//           </Fade>

//           <Grid container spacing={4} justifyContent="center">
//             {[
//               {
//                 title: "Face To Face",
//                 subtitle: "Offline Counseling",
//                 bgImage: "url('https://media.istockphoto.com/id/1320034911/vector/patient-with-psychologist.jpg?s=1024x1024&w=is&k=20&c=Km4sTsT5y63rJiFgFl6NmPW4J2KzQK8AJec5KKuaXSA=')",
//                 color: "#4CAF50"
//               },
//               {
//                 title: "Online Counselling",
//                 subtitle: "Virtual Sessions",
//                 bgImage: "url('https://media.istockphoto.com/id/1257527796/vector/sad-man-making-video-call-with-female-psychologist-by-computer.jpg?s=1024x1024&w=is&k=20&c=ycgk78JXX2bSwzP9Hdr4W1itnlydLFF0Dgj2q2_7f4Y=')",
//                 color: "#2196F3"
//               },
//               {
//                 title: "Career Assessment",
//                 subtitle: "(Discover Yourself)",
//                 bgImage: "url('https://media.istockphoto.com/id/1036557512/vector/hands-with-pen-fill-survey-or-exam-forms.jpg?s=1024x1024&w=is&k=20&c=hmoG8_dmkbsCteCmM4aOR-Hf3Vp9U3D0Eq0VAHbHW08=')",
//                 color: "#FF9800"
//               },
//               {
//                 title: "College Counselling",
//                 subtitle: " (Domestic & Abroad)",
//                 bgImage: "url('https://media.istockphoto.com/id/1211706130/vector/male-student-choosing-program-in-college.jpg?s=1024x1024&w=is&k=20&c=siNkACZrQzw3WiVYOC4HvemLouCmcfTanywAyllQGaE=')",
//                 color: "#06deeeff"
//               },
//             ].map((card, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
//                   <Card
//                     sx={{
//                       height: { xs: 280, md: 350 },
//                       backgroundImage: card.bgImage,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       borderRadius: 3,
//                       position: "relative",
//                       overflow: "hidden",
//                       boxShadow: `0 10px 30px ${card.color}40`,
//                       transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                       cursor: "pointer",
//                       "&:hover": {
//                         transform: "translateY(-10px) scale(1.02)",
//                         boxShadow: `0 20px 40px ${card.color}80`,
//                         "& .service-content": {
//                           background: "rgba(255, 255, 255, 0.95)",
//                           transform: "translateY(0)",
//                         }
//                       },
//                       display: "flex",
//                       alignItems: "flex-end",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: `linear-gradient(to top, ${card.color}EE, ${card.color}60)`,
//                         zIndex: 1,
//                       }}
//                     />
//                     <Box
//                       className="service-content"
//                       sx={{
//                         position: "relative",
//                         zIndex: 2,
//                         width: "100%",
//                         p: { xs: 3, md: 4 },
//                         background: "rgba(255, 255, 255, 0.85)",
//                         backdropFilter: "blur(10px)",
//                         borderRadius: "16px 16px 0 0",
//                         transform: "translateY(5px)",
//                         transition: "all 0.3s ease",
//                       }}
//                     >
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 800,
//                           mb: 1.5,
//                           fontSize: { xs: "1.4rem", md: "1.6rem" },
//                           color: card.color,
//                           display: "inline-block",
//                           textShadow: "0 1px 2px rgba(0,0,0,0.1)",
//                         }}
//                       >
//                         {card.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           fontWeight: 600,
//                           fontSize: { xs: "1rem", md: "1.1rem" },
//                           color: "#333",
//                           lineHeight: 1.4,
//                         }}
//                       >
//                         {card.subtitle}
//                       </Typography>
//                     </Box>
//                   </Card>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>

//           {/* CTA Button */}
//           <Fade in={true} timeout={1000} style={{ transitionDelay: "800ms" }}>
//             <Box sx={{ textAlign: "center", mt: 8 }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: "#f3ad17ff",
//                   color: "white",
//                   fontWeight: 800,
//                   px: 6,
//                   py: 2,
//                   borderRadius: 3,
//                   fontSize: "1.2rem",
//                   textTransform: 'none',
//                   boxShadow: "0 10px 30px rgba(243, 173, 23, 0.4)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     bgcolor: "#e09c15",
//                     transform: "translateY(-3px)",
//                     boxShadow: "0 15px 35px rgba(243, 173, 23, 0.6)",
//                   },
//                 }}
//               >
//                 Explore All Services
//               </Button>
//             </Box>
//           </Fade>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


// import React from 'react';
// import { Box, Typography, Card, Grid, Container, Button, Stack, Paper, Fade, Slide } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import heroImage from './images/hero-students.jpg';

// const Home = () => {
//   const navigate = useNavigate();

//   const pricingPlans = [
//     {
//       id: 1,
//       title: "Psychometric Test",
//       price: "999/-",
//       features: [
//         "Career Assessment (Psychometric Test)",
//         "Career Report / Result"
//       ],
//       buttonText: "Choose Plan",
//       color: "#4CAF50"
//     },
//     {
//       id: 2,
//       title: "Online Counselling",
//       price: "2999/-",
//       features: [
//         "Career Assessment (Psychometric Test)",
//          "Report Analysis",
//         "Online Counselling 45 minutes",

//       ],
//       buttonText: "Choose Plan",
//       color: "#2196F3"
//     },
//     {
//       id: 3,
//       title: "Offline Counselling",
//       price: "4999/-",
//       features: [
//         "Career Assessment (Psychometric Test)",
//        "Report Analysis" ,
//         "Offline Counseling 1 hour",
//         "Student + Parents Session",

//       ],
//       buttonText: "Choose Plan",
//       color: "#FF9800"
//     },
//     {
//       id: 4,
//       title: "Abroad Counselling ",
//       price: "9999/-",
//       features: [
//         "Career Assessment (Psychometric Test)",
//         "Result Analysis & Research",
//         "Details of Abroad Entrance Exams",
//         "Course Selection Assistance",
//         "Admission assistance for up to 1 year"
//       ],
//       buttonText: "Choose Plan",
//       color: "#9C27B0"
//     }
//   ];

//   const handlePlanClick = (planId) => {
//     navigate(`/package/${planId}`);
//   };

//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>

//       {/* New Pricing Section */}
//       <Box sx={{
//         py: 10,
//         bgcolor: "#f8f9fa",
//         background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
//         position: "relative",
//       }}>
//         <Container maxWidth="lg">
//           <Fade in={true} timeout={1000}>
//             <Typography
//               variant="h2"
//               align="center"
//               sx={{
//                 fontWeight: 800,
//                 mb: 2,
//                 fontSize: { xs: "2.5rem", md: "3.5rem" },
//                 color: "#9e5349ff",
//                 textShadow: "0 2px 10px rgba(158, 83, 73, 0.2)",
//               }}
//             >
//               It's Your Life  Plan It Better
//             </Typography>
//           </Fade>

//           <Fade in={true} timeout={1000}>
//             <Typography
//               variant="h4"
//               align="center"
//               sx={{
//                 fontWeight: 600,
//                 mb: 8,
//                 fontSize: { xs: "1.5rem", md: "2rem" },
//                 color: "#5ebeb6ff",
//                 fontStyle: 'italic',
//               }}
//             >

//             </Typography>
//           </Fade>

//           <Grid container spacing={4} justifyContent="center">
//             {pricingPlans.map((plan, index) => (
//               <Grid item xs={12} sm={6} md={3} key={plan.id}>
//                 <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
//                   <Card
//                     sx={{
//                       height: { xs: 'auto', md: 500 },
//                       background: "white",
//                       borderRadius: 3,
//                       position: "relative",
//                       overflow: "hidden",
//                       boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//                       transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                       cursor: "pointer",
//                       display: "flex",
//                       flexDirection: "column",
//                       "&:hover": {
//                         transform: "translateY(-10px) scale(1.02)",
//                         boxShadow: `0 20px 40px ${plan.color}40`,
//                       },
//                     }}
//                     onClick={() => handlePlanClick(plan.id)}
//                   >
//                     {/* Header with colored accent */}
//                     <Box
//                       sx={{
//                         background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}CC 100%)`,
//                         py: 3,
//                         px: 2,
//                         textAlign: "center",
//                       }}
//                     >
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 800,
//                           color: "white",
//                           fontSize: { xs: "1.3rem", md: "1.5rem" },
//                           textShadow: "0 1px 2px rgba(0,0,0,0.2)",
//                         }}
//                       >
//                         {plan.title}
//                       </Typography>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           fontWeight: 900,
//                           color: "white",
//                           mt: 1,
//                           fontSize: { xs: "2rem", md: "2.5rem" },
//                           textShadow: "0 2px 4px rgba(0,0,0,0.3)",
//                         }}
//                       >
//                         {plan.price}
//                       </Typography>
//                     </Box>

//                     {/* Features List */}
//                     <Box sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
//                       <Box sx={{ flexGrow: 1 }}>
//                         {plan.features.map((feature, featureIndex) => (
//                           <Box key={featureIndex} sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
//                             <Box sx={{
//                               width: 8,
//                               height: 8,
//                               borderRadius: "50%",
//                               bgcolor: plan.color,
//                               mr: 2,
//                               mt: 0.5,
//                               flexShrink: 0
//                             }} />
//                             <Typography variant="body1" sx={{
//                               fontWeight: 500,
//                               color: "#333",
//                               fontSize: "0.9rem",
//                               lineHeight: 1.4,
//                             }}>
//                               {feature}
//                             </Typography>
//                           </Box>
//                         ))}
//                       </Box>

//                       {/* Button */}
//                       <Button
//                         variant="contained"
//                         fullWidth
//                         sx={{
//                           bgcolor: plan.color,
//                           color: "white",
//                           fontWeight: 700,
//                           py: 1.5,
//                           borderRadius: 2,
//                           fontSize: "1rem",
//                           textTransform: 'none',
//                           boxShadow: `0 5px 15px ${plan.color}80`,
//                           transition: "all 0.3s ease",
//                           mt: 2,
//                           "&:hover": {
//                             bgcolor: plan.color,
//                             transform: "translateY(-2px)",
//                             boxShadow: `0 8px 20px ${plan.color}80`,
//                           },
//                         }}
//                       >
//                         {plan.buttonText}
//                       </Button>
//                     </Box>
//                   </Card>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Additional Info */}
//           <Fade in={true} timeout={1000} style={{ transitionDelay: "800ms" }}>
//             <Typography
//               variant="body1"
//               align="center"
//               sx={{
//                 mt: 4,
//                 color: "#666",
//                 fontStyle: 'italic',
//                 fontSize: "1.1rem",
//               }}
//             >
//               Choose the plan that best fits your career planning needs
//             </Typography>
//           </Fade>
//         </Container>
//       </Box>

//       {/* Hero Section - Enhanced Red Theme (Moved Down) */}
//       <Box sx={{
//         bgcolor: "#9e5349ff",
//         py: 15,
//         background: "linear-gradient(135deg, #9e5349ff 0%, #7a3a32 100%)",
//         position: "relative",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: "radial-gradient(circle at 70% 20%, rgba(248, 232, 0, 0.1) 0%, transparent 50%)",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={6} alignItems="center">
//             {/* Left Content */}
//             <Grid item xs={12} md={6}>
//               <Fade in={true} timeout={1000}>
//                 <Box>
//                   <Typography
//                     variant="h3"
//                     sx={{
//                       fontWeight: 800,
//                       mb: 3,
//                       fontSize: { xs: "2.2rem", md: "3.2rem" },
//                       color: "#ffffff",
//                       lineHeight: 1.1,
//                       textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                     }}
//                   >
//                     Discover Your <span style={{ color: "#f8e800ff" }}>Potential</span> <br />
//                     Design Your <span style={{ color: "#f8e800ff" }}>Career</span>
//                   </Typography>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 4,
//                       color: "rgba(255,255,255,0.9)",
//                       fontSize: "1.2rem",
//                       lineHeight: 1.7,
//                       fontWeight: 400,
//                       maxWidth: "90%",
//                     }}
//                   >
//                     Navigate the competitive world with strategic career planning. Our certified counselors and AI technology provide the edge you need for success.
//                   </Typography>

//                   {/* Enhanced Features List */}
//                   <Box sx={{ mb: 4 }}>
//                     {["Expert Career Counselors", "Certified Professionals", "Comprehensive Career Tests"].map((feature, index) => (
//                       <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                         <Box sx={{
//                           width: 8,
//                           height: 8,
//                           borderRadius: "50%",
//                           bgcolor: "#f8e800ff",
//                           mr: 2,
//                           boxShadow: "0 0 10px #f8e800ff"
//                         }} />
//                         <Typography variant="body1" sx={{
//                           fontWeight: 600,
//                           color: "#ffffff",
//                           fontSize: "1.1rem",
//                           textShadow: "0 1px 2px rgba(0,0,0,0.3)"
//                         }}>
//                           {feature}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>

//                   {/* Enhanced Buttons */}
//                   <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 6 }}>
//                     <Button
//                       variant="contained"
//                       sx={{
//                         bgcolor: "#f8e800ff",
//                         color: "black",
//                         fontWeight: 800,
//                         px: 5,
//                         py: 1.8,
//                         borderRadius: 3,
//                         fontSize: "1.1rem",
//                         textTransform: 'none',
//                         boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           bgcolor: "#1be700ff",
//                           transform: "translateY(-3px)",
//                           boxShadow: "0 12px 25px rgba(27, 231, 0, 0.5)",
//                         },
//                       }}
//                     >
//                       PSYCHOMETRIC TEST
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       sx={{
//                         border: "2px solid #f8e800ff",
//                         color: "#f8e800ff",
//                         fontWeight: 800,
//                         px: 5,
//                         py: 1.6,
//                         borderRadius: 3,
//                         fontSize: "1.1rem",
//                         textTransform: 'none',
//                         background: "rgba(248, 232, 0, 0.1)",
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           bgcolor: "#f8e800ff",
//                           color: "black",
//                           transform: "translateY(-3px)",
//                           boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
//                         },
//                       }}
//                     >
//                       Schedule Consultation
//                     </Button>
//                   </Stack>

//                   {/* Enhanced Stats */}
//                   <Grid container spacing={4} sx={{ textAlign: "center" }}>
//                     {[
//                       { value: "10,000+", label: "Students Guided" },
//                       { value: "99%", label: "Success Rate" },
//                       { value: "10+", label: "Years Experience" }
//                     ].map((stat, index) => (
//                       <Grid item xs={4} key={index}>
//                         <Typography variant="h4" sx={{
//                           fontWeight: 900,
//                           color: "#10e63eff",
//                           mb: 1,
//                           fontSize: "2.8rem",
//                           textShadow: "0 2px 8px rgba(16, 230, 62, 0.4)"
//                         }}>
//                           {stat.value}
//                         </Typography>
//                         <Typography variant="body2" sx={{
//                           color: "#ffffff",
//                           fontWeight: 700,
//                           fontSize: "1rem",
//                           letterSpacing: "0.5px"
//                         }}>
//                           {stat.label}
//                         </Typography>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               </Fade>
//             </Grid>

//             {/* Right Image */}
//             <Grid item xs={12} md={6}>
//               <Slide direction="left" in={true} timeout={800}>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     height: { xs: 400, md: 550 },
//                     borderRadius: 4,
//                     overflow: "hidden",
//                     boxShadow: "0 25px 50px rgba(238, 234, 10, 0.3)",
//                     backgroundImage: `url(${heroImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     position: "relative",
//                     "&::before": {
//                       content: '""',
//                       position: "absolute",
//                       top: 0,
//                       left: 0,
//                       right: 0,
//                       bottom: 0,
//                       background: "linear-gradient(45deg, rgba(158, 83, 73, 0.1) 0%, transparent 50%)",
//                       zIndex: 1,
//                     }
//                   }}
//                 />
//               </Slide>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Enhanced Services Section */}
//       <Box sx={{
//         py: 10,
//         bgcolor: "#5ebeb6ff",
//         background: "linear-gradient(135deg, #5ebeb6ff 0%, #4a9a94 100%)",
//         position: "relative",
//         overflow: "hidden",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: -100,
//           right: -100,
//           width: 300,
//           height: 300,
//           borderRadius: "50%",
//           background: "rgba(243, 173, 23, 0.1)",
//         }
//       }}>
//         <Container maxWidth="lg">
//           <Fade in={true} timeout={1000}>
//             <Typography
//               variant="h3"
//               align="center"
//               sx={{
//                 fontWeight: 800,
//                 mb: 8,
//                 fontSize: { xs: "2rem", md: "3rem" },
//                 color: "#f3ad17ff",
//                 textShadow: "0 2px 10px rgba(243, 173, 23, 0.3)",
//                 position: "relative",
//                 display: "inline-block",
//                 left: "50%",
//                 transform: "translateX(-50%)",
//                 "&::after": {
//                   content: '""',
//                   position: "absolute",
//                   bottom: -10,
//                   left: "10%",
//                   width: "80%",
//                   height: 4,
//                   background: "linear-gradient(90deg, transparent, #f3ad17ff, transparent)",
//                   borderRadius: 2,
//                 }
//               }}
//             >
//               Let's Turn Your Potential Into A Powerful Career
//             </Typography>
//           </Fade>

//           <Grid container spacing={4} justifyContent="center">
//             {[
//               {
//                 title: "Face To Face",
//                 subtitle: "Offline Counseling",
//                 bgImage: "url('https://media.istockphoto.com/id/1320034911/vector/patient-with-psychologist.jpg?s=1024x1024&w=is&k=20&c=Km4sTsT5y63rJiFgFl6NmPW4J2KzQK8AJec5KKuaXSA=')",
//                 color: "#4CAF50"
//               },
//               {
//                 title: "Online Counselling",
//                 subtitle: "Virtual Sessions",
//                 bgImage: "url('https://media.istockphoto.com/id/1257527796/vector/sad-man-making-video-call-with-female-psychologist-by-computer.jpg?s=1024x1024&w=is&k=20&c=ycgk78JXX2bSwzP9Hdr4W1itnlydLFF0Dgj2q2_7f4Y=')",
//                 color: "#2196F3"
//               },
//               {
//                 title: "Career Assessment",
//                 subtitle: "(Discover Yourself)",
//                 bgImage: "url('https://media.istockphoto.com/id/1036557512/vector/hands-with-pen-fill-survey-or-exam-forms.jpg?s=1024x1024&w=is&k=20&c=hmoG8_dmkbsCteCmM4aOR-Hf3Vp9U3D0Eq0VAHbHW08=')",
//                 color: "#FF9800"
//               },
//               {
//                 title: "College Counselling",
//                 subtitle: " (Domestic & Abroad)",
//                 bgImage: "url('https://media.istockphoto.com/id/1211706130/vector/male-student-choosing-program-in-college.jpg?s=1024x1024&w=is&k=20&c=siNkACZrQzw3WiVYOC4HvemLouCmcfTanywAyllQGaE=')",
//                 color: "#06deeeff"
//               },
//             ].map((card, index) => (
//               <Grid item xs={12} sm={6} md={3} key={index}>
//                 <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
//                   <Card
//                     sx={{
//                       height: { xs: 280, md: 350 },
//                       backgroundImage: card.bgImage,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                       borderRadius: 3,
//                       position: "relative",
//                       overflow: "hidden",
//                       boxShadow: `0 10px 30px ${card.color}40`,
//                       transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                       cursor: "pointer",
//                       "&:hover": {
//                         transform: "translateY(-10px) scale(1.02)",
//                         boxShadow: `0 20px 40px ${card.color}80`,
//                         "& .service-content": {
//                           background: "rgba(255, 255, 255, 0.95)",
//                           transform: "translateY(0)",
//                         }
//                       },
//                       display: "flex",
//                       alignItems: "flex-end",
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: `linear-gradient(to top, ${card.color}EE, ${card.color}60)`,
//                         zIndex: 1,
//                       }}
//                     />
//                     <Box
//                       className="service-content"
//                       sx={{
//                         position: "relative",
//                         zIndex: 2,
//                         width: "100%",
//                         p: { xs: 3, md: 4 },
//                         background: "rgba(255, 255, 255, 0.85)",
//                         backdropFilter: "blur(10px)",
//                         borderRadius: "16px 16px 0 0",
//                         transform: "translateY(5px)",
//                         transition: "all 0.3s ease",
//                       }}
//                     >
//                       <Typography
//                         variant="h5"
//                         sx={{
//                           fontWeight: 800,
//                           mb: 1.5,
//                           fontSize: { xs: "1.4rem", md: "1.6rem" },
//                           color: card.color,
//                           display: "inline-block",
//                           textShadow: "0 1px 2px rgba(0,0,0,0.1)",
//                         }}
//                       >
//                         {card.title}
//                       </Typography>
//                       <Typography
//                         variant="body1"
//                         sx={{
//                           fontWeight: 600,
//                           fontSize: { xs: "1rem", md: "1.1rem" },
//                           color: "#333",
//                           lineHeight: 1.4,
//                         }}
//                       >
//                         {card.subtitle}
//                       </Typography>
//                     </Box>
//                   </Card>
//                 </Fade>
//               </Grid>
//             ))}
//           </Grid>

//           {/* CTA Button */}
//           <Fade in={true} timeout={1000} style={{ transitionDelay: "800ms" }}>
//             <Box sx={{ textAlign: "center", mt: 8 }}>
//               <Button
//                 variant="contained"
//                 sx={{
//                   bgcolor: "#f3ad17ff",
//                   color: "white",
//                   fontWeight: 800,
//                   px: 6,
//                   py: 2,
//                   borderRadius: 3,
//                   fontSize: "1.2rem",
//                   textTransform: 'none',
//                   boxShadow: "0 10px 30px rgba(243, 173, 23, 0.4)",
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     bgcolor: "#e09c15",
//                     transform: "translateY(-3px)",
//                     boxShadow: "0 15px 35px rgba(243, 173, 23, 0.6)",
//                   },
//                 }}
//               >
//                 Explore All Services
//               </Button>
//             </Box>
//           </Fade>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;

import React from 'react';
import { Box, Typography, Card, Grid, Container, Button, Stack, Paper, Fade, Slide, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import heroImage from './images/hero-students.jpg';

const Home = () => {
  const navigate = useNavigate();

  const pricingPlans = [
    {
      id: 1,
      title: "Psychometric Test",
      price: "₹999",
      features: [
        "Career Assessment (Psychometric Test)",
        "Career Report / Result"
      ],
      buttonText: "Choose Plan",
      color: "#4CAF50", // Green
      popular: false
    },
    {
      id: 2,
      title: "Online Counselling",
      price: "₹2,999",
      features: [
        "Career Assessment (Psychometric Test)",
        "Report Analysis",
        "Online Counselling 45 minutes",
      ],
      buttonText: "Choose Plan",
      color: "#2196F3", // Blue
      popular: false
    },
    {
      id: 3,
      title: "Offline Counselling",
      price: "₹4,999",
      features: [
        "Career Assessment (Psychometric Test)",
        "Report Analysis",
        "Offline Counseling 1 hour",
        "Student + Parents Session",
      ],
      buttonText: "Choose Plan",
      color: "#FF9800", // Orange
      popular: true
    },
    {
      id: 4,
      title: "Abroad Counselling",
      price: "₹9,999",
      features: [
        "Career Assessment (Psychometric Test)",
        "Result Analysis & Research",
        "Details of Abroad Entrance Exams",
        "Course Selection Assistance",
        "Admission assistance for up to 1 year"
      ],
      buttonText: "Choose Plan",
      color: "#9C27B0", // Purple
      popular: false
    }
  ];

  const handlePlanClick = (planId) => {
    navigate(`/package/${planId}`);
  };

  // Color Combinations for Reference:
  // Primary: #9e5349ff (Burgundy)
  // Secondary: #f8e800ff (Yellow)
  // Accent 1: #5ebeb6ff (Teal)
  // Accent 2: #f3ad17ff (Gold)
  // Accent 3: #10e63eff (Green)
  // Neutral: #f8f9fa (Light Gray)

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>

      {/* Hero Section - Enhanced Red Theme */}
      <Box sx={{
        bgcolor: "#9e5349ff",
        py: 15,
        background: "linear-gradient(135deg, #9e5349ff 0%, #7a3a32 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 70% 20%, rgba(248, 232, 0, 0.1) 0%, transparent 50%)",
        }
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Content */}
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      fontSize: { xs: "2.2rem", md: "3.2rem" },
                      color: "#ffffff",
                      lineHeight: 1.1,
                      textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    Discover Your <span style={{ color: "#f8e800ff" }}>Potential</span> <br />
                    Design Your <span style={{ color: "#f8e800ff" }}>Career</span>
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      color: "rgba(255,255,255,0.9)",
                      fontSize: "1.2rem",
                      lineHeight: 1.7,
                      fontWeight: 400,
                      maxWidth: "90%",
                    }}
                  >
                    Navigate the competitive world with strategic career planning. Our certified counselors and AI technology provide the edge you need for success.
                  </Typography>

                  {/* Enhanced Features List */}
                  <Box sx={{ mb: 4 }}>
                    {["Expert Career Counselors", "Certified Professionals", "Comprehensive Career Tests"].map((feature, index) => (
                      <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "#f8e800ff",
                          mr: 2,
                          boxShadow: "0 0 10px #f8e800ff"
                        }} />
                        <Typography variant="body1" sx={{
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: "1.1rem",
                          textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                        }}>
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Enhanced Buttons */}
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 6 }}>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#f8e800ff",
                        color: "black",
                        fontWeight: 800,
                        px: 5,
                        py: 1.8,
                        borderRadius: 3,
                        fontSize: "1.1rem",
                        textTransform: 'none',
                        boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "#1be700ff",
                          transform: "translateY(-3px)",
                          boxShadow: "0 12px 25px rgba(27, 231, 0, 0.5)",
                        },
                      }}
                    >
                      PSYCHOMETRIC TEST
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        border: "2px solid #f8e800ff",
                        color: "#f8e800ff",
                        fontWeight: 800,
                        px: 5,
                        py: 1.6,
                        borderRadius: 3,
                        fontSize: "1.1rem",
                        textTransform: 'none',
                        background: "rgba(248, 232, 0, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: "#f8e800ff",
                          color: "black",
                          transform: "translateY(-3px)",
                          boxShadow: "0 8px 20px rgba(248, 232, 0, 0.4)",
                        },
                      }}
                    >
                      Schedule Consultation
                    </Button>
                  </Stack>

                  {/* Enhanced Stats */}
                  <Grid container spacing={4} sx={{ textAlign: "center" }}>
                    {[
                      { value: "10,000+", label: "Students Guided" },
                      { value: "99%", label: "Success Rate" },
                      { value: "10+", label: "Years Experience" }
                    ].map((stat, index) => (
                      <Grid item xs={4} key={index}>
                        <Typography variant="h4" sx={{
                          fontWeight: 900,
                          color: "#10e63eff",
                          mb: 1,
                          fontSize: "2.8rem",
                          textShadow: "0 2px 8px rgba(16, 230, 62, 0.4)"
                        }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "1rem",
                          letterSpacing: "0.5px"
                        }}>
                          {stat.label}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Fade>
            </Grid>

            {/* Right Image */}
            <Grid item xs={12} md={6}>
              <Slide direction="left" in={true} timeout={800}>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: 400, md: 550 },
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: "0 25px 50px rgba(238, 234, 10, 0.3)",
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "linear-gradient(45deg, rgba(158, 83, 73, 0.1) 0%, transparent 50%)",
                      zIndex: 1,
                    }
                  }}
                />
              </Slide>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Arpana Jain Profile Section */}
      <Box sx={{
        py: 8,
        bgcolor: "#f8f9fa",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
      }}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Card sx={{
              p: { xs: 3, md: 4 },
              borderRadius: 3,
              boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
              background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
              border: "1px solid rgba(0,0,0,0.05)",
            }}>
              <Grid container spacing={4} alignItems="center">
                {/* Profile Image */}
                <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
                  <Avatar
                    sx={{
                      width: 200,
                      height: 200,
                      mx: "auto",
                      mb: 2,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                      border: "4px solid #5ebeb6ff"
                    }}
                    src="/path-to-arpana-image.jpg" // Add your image path here
                    alt="Arpana Jain"
                  />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#9e5349ff" }}>
                    Arpana Jain
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#666", fontWeight: 600 }}>
                    Co-founder & Career Coach
                  </Typography>
                </Grid>

                {/* Profile Content */}
                <Grid item xs={12} md={8}>
                  <Typography variant="body1" sx={{
                    lineHeight: 1.8,
                    color: "#333",
                    fontSize: "1.1rem",
                    mb: 3,
                    textAlign: "justify"
                  }}>
                    A counsellor with a passion for driving career clarity to the numerous students she enthusiastically mentors.
                    Arpana has been involved in Teaching, Research, Consultancy and Training for the past 10 years.
                    She believes that every individual student and parent who interacts with her adds valuable knowledge to her life.
                    Packed with information & an objective standpoint towards her students' abilities & talents,
                    she diligently guides them on their career plans.
                  </Typography>

                  {/* Key Highlights with Icons */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2, p: 1.5, borderRadius: 2, bgcolor: "rgba(94, 190, 182, 0.1)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, bgcolor: "#5ebeb6ff", borderRadius: "50%", mr: 2, color: "white" }}>
                          <span style={{ fontSize: "20px" }}>⏳</span>
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#5ebeb6ff", fontSize: "0.7rem", mb: 0.5 }}>DEMO</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>10+ Years Experience</Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2, p: 1.5, borderRadius: 2, bgcolor: "rgba(94, 190, 182, 0.1)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, bgcolor: "#5ebeb6ff", borderRadius: "50%", mr: 2, color: "white" }}>
                          <span style={{ fontSize: "20px" }}>📚</span>
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#5ebeb6ff", fontSize: "0.7rem", mb: 0.5 }}>DEMO</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>Teaching & Research Background</Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2, p: 1.5, borderRadius: 2, bgcolor: "rgba(94, 190, 182, 0.1)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, bgcolor: "#5ebeb6ff", borderRadius: "50%", mr: 2, color: "white" }}>
                          <span style={{ fontSize: "20px" }}>💼</span>
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#5ebeb6ff", fontSize: "0.7rem", mb: 0.5 }}>DEMO</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>Consultancy & Training</Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 2, p: 1.5, borderRadius: 2, bgcolor: "rgba(94, 190, 182, 0.1)" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, bgcolor: "#5ebeb6ff", borderRadius: "50%", mr: 2, color: "white" }}>
                          <span style={{ fontSize: "20px" }}>👥</span>
                        </Box>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#5ebeb6ff", fontSize: "0.7rem", mb: 0.5 }}>DEMO</Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>Student & Parent Counseling</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Fade>
        </Container>
      </Box>

      {/* Enhanced Pricing Section - FIXED SIZING */}
      <Box sx={{
        py: 10,
        bgcolor: "#f8f9fa",
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
      }}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                color: "#9e5349ff",
                textShadow: "0 2px 10px rgba(158, 83, 73, 0.2)",
              }}
            >
              Affordable Career Plans
            </Typography>
          </Fade>

          <Fade in={true} timeout={1000}>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: 400,
                mb: 8,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Choose the perfect plan to unlock your career potential with expert guidance
            </Typography>
          </Fade>

          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={3} key={plan.id} sx={{ display: 'flex' }}>
                <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    sx={{
                      width: '100%',
                      minHeight: { xs: 'auto', md: 520 },
                      background: "white",
                      borderRadius: 3,
                      position: "relative",
                      overflow: "hidden",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      border: plan.popular ? "2px solid #FF9800" : "2px solid transparent",
                      "&:hover": {
                        transform: "translateY(-10px) scale(1.02)",
                        boxShadow: `0 20px 40px ${plan.color}40`,
                      },
                    }}
                    onClick={() => handlePlanClick(plan.id)}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          bgcolor: "#FF9800",
                          color: "white",
                          px: 3,
                          py: 0.5,
                          borderBottomLeftRadius: 12,
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          zIndex: 2,
                        }}
                      >
                        MOST POPULAR
                      </Box>
                    )}

                    {/* Header with colored accent */}
                    <Box
                      sx={{
                        background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}CC 100%)`,
                        py: 3,
                        px: 2,
                        textAlign: "center",
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 800,
                          color: "white",
                          fontSize: { xs: "1.3rem", md: "1.5rem" },
                          textShadow: "0 1px 2px rgba(0,0,0,0.2)",
                        }}
                      >
                        {plan.title}
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 900,
                          color: "white",
                          mt: 1,
                          fontSize: { xs: "2rem", md: "2.5rem" },
                          textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                      >
                        {plan.price}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.9)",
                          fontWeight: 500,
                          mt: 0.5,
                        }}
                      >
                        One-time payment
                      </Typography>
                    </Box>

                    {/* Features List */}
                    <Box sx={{
                      p: 3,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: 'space-between'
                    }}>
                      <Box>
                        {plan.features.map((feature, featureIndex) => (
                          <Box key={featureIndex} sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                            <Box sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              bgcolor: plan.color,
                              mr: 2,
                              mt: 0.2,
                              flexShrink: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              color: "white",
                              fontWeight: "bold",
                            }}>
                              ✓
                            </Box>
                            <Typography variant="body1" sx={{
                              fontWeight: 500,
                              color: "#333",
                              fontSize: "0.95rem",
                              lineHeight: 1.4,
                            }}>
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* Button */}
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          bgcolor: plan.color,
                          color: "white",
                          fontWeight: 700,
                          py: 1.5,
                          borderRadius: 2,
                          fontSize: "1rem",
                          textTransform: 'none',
                          boxShadow: `0 5px 15px ${plan.color}80`,
                          transition: "all 0.3s ease",
                          mt: 2,
                          "&:hover": {
                            bgcolor: plan.color,
                            transform: "translateY(-2px)",
                            boxShadow: `0 8px 20px ${plan.color}80`,
                          },
                        }}
                      >
                        {plan.buttonText}
                      </Button>
                    </Box>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>

          {/* Additional Info */}
          <Fade in={true} timeout={1000} style={{ transitionDelay: "800ms" }}>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#666",
                  fontStyle: 'italic',
                  fontSize: "1.1rem",
                  mb: 2,
                }}
              >
                All plans include personalized attention and comprehensive support
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;