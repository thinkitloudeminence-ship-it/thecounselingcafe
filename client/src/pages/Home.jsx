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

// // export default Home;import React from 'react';
// import { Box, Typography, Card, Grid, Container, Button, Stack, Paper, Fade, Slide, Avatar } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import heroImage from './images/hero-students.jpg';

// const Home = () => {
//   const navigate = useNavigate();

//   const pricingPlans = [
//     {
//       id: 1,
//       title: "Psychometric Test",
//       price: "₹999",
//       features: [
//         "Career Assessment (Psychometric Test)",
//         "Career Report / Result"
//       ],
//       buttonText: "Choose Plan",
//       color: "#4CAF50",
//       popular: false
//     },
//     {
//       id: 2,
//       title: "Online Counselling",
//       price: "₹2,999",
//       features: [
//         "Career Assessment (Psychometric Test)",
//         "Report Analysis",
//         "Online Counselling 45 minutes",
//       ],
//       buttonText: "Choose Plan",
//       color: "#2196F3",
//       popular: false
//     },
//     {
//       id: 3,
//       title: "Offline Counselling",
//       price: "₹4,999",
//       features: [
//         "Career Assessment (Psychometric Test)",
//         "Report Analysis",
//         "Offline Counseling 1 hour",
//         "Student + Parents Session",
//       ],
//       buttonText: "Choose Plan",
//       color: "#FF9800",
//       popular: true
//     },
//     {
//       id: 4,
//       title: "Abroad Counselling",
//       price: "₹9,999",
//       features: [
//         "Career Assessment (Psychometric Test)",
//         "Result Analysis & Research",
//         "Details of Abroad Entrance Exams",
//         "Course Selection Assistance",
//         "Admission assistance for up to 1 year"
//       ],
//       buttonText: "Choose Plan",
//       color: "#9C27B0",
//       popular: false
//     }
//   ];

//   const handlePlanClick = (planId) => {
//     navigate(`/package/${planId}`);
//   };

//   return (
//     <Box sx={{ width: "100%", overflow: "hidden" }}>

//       {/* Hero Section - Mobile First */}
//       <Box sx={{
//         bgcolor: "#9e5349ff",
//         py: { xs: 8, sm: 12, md: 15 },
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
//           <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>

//             {/* Image Section - Top on Mobile */}
//             <Grid item xs={12} md={6}>
//               <Slide direction="left" in={true} timeout={800}>
//                 <Box
//                   sx={{
//                     width: "100%",
//                     height: { xs: 280, sm: 350, md: 550 },
//                     borderRadius: { xs: 2, md: 4 },
//                     overflow: "hidden",
//                     boxShadow: "0 15px 30px rgba(238, 234, 10, 0.3)",
//                     backgroundImage: `url(${heroImage})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                     mb: { xs: 4, md: 0 },
//                   }}
//                 />
//               </Slide>
//             </Grid>

//             {/* Content Section - Bottom on Mobile */}
//             <Grid item xs={12} md={6}>
//               <Fade in={true} timeout={1000}>
//                 <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
//                   <Typography
//                     variant="h1"
//                     sx={{
//                       fontWeight: 800,
//                       mb: 3,
//                       fontSize: { xs: "2rem", sm: "2.5rem", md: "3.2rem" },
//                       color: "#ffffff",
//                       lineHeight: 1.2,
//                     }}
//                   >
//                     Discover Your <Box component="span" sx={{ color: "#f8e800ff" }}>Potential</Box>
//                     <br />
//                     Design Your <Box component="span" sx={{ color: "#f8e800ff" }}>Career</Box>
//                   </Typography>

//                   <Typography
//                     variant="h6"
//                     sx={{
//                       mb: 4,
//                       color: "rgba(255,255,255,0.9)",
//                       fontSize: { xs: "1rem", sm: "1.1rem" },
//                       lineHeight: 1.6,
//                       fontWeight: 400,
//                       px: { xs: 1, md: 0 },
//                     }}
//                   >
//                     Navigate the competitive world with strategic career planning. Our certified counselors and AI technology provide the edge you need for success.
//                   </Typography>

//                   {/* Features List */}
//                   <Box sx={{ mb: 4 }}>
//                     {["Expert Career Counselors", "Certified Professionals", "Comprehensive Career Tests"].map((feature, index) => (
//                       <Box key={index} sx={{ 
//                         display: "flex", 
//                         alignItems: "center", 
//                         mb: 2,
//                         justifyContent: { xs: "center", md: "flex-start" }
//                       }}>
//                         <Box sx={{
//                           width: 6,
//                           height: 6,
//                           borderRadius: "50%",
//                           bgcolor: "#f8e800ff",
//                           mr: 2,
//                           flexShrink: 0
//                         }} />
//                         <Typography variant="body1" sx={{
//                           fontWeight: 600,
//                           color: "#ffffff",
//                           fontSize: { xs: "0.9rem", sm: "1rem" },
//                         }}>
//                           {feature}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>

//                   {/* Buttons */}
//                   <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 5 }}>
//                     <Button
//                       variant="contained"
//                       size="large"
//                       sx={{
//                         bgcolor: "#f8e800ff",
//                         color: "black",
//                         fontWeight: 700,
//                         px: 4,
//                         py: 1.5,
//                         borderRadius: 2,
//                         fontSize: { xs: "0.9rem", sm: "1rem" },
//                         textTransform: 'none',
//                         minWidth: { xs: "100%", sm: "auto" },
//                       }}
//                     >
//                       PSYCHOMETRIC TEST
//                     </Button>
//                     <Button
//                       variant="outlined"
//                       size="large"
//                       sx={{
//                         border: "2px solid #f8e800ff",
//                         color: "#f8e800ff",
//                         fontWeight: 700,
//                         px: 4,
//                         py: 1.3,
//                         borderRadius: 2,
//                         fontSize: { xs: "0.9rem", sm: "1rem" },
//                         textTransform: 'none',
//                         minWidth: { xs: "100%", sm: "auto" },
//                       }}
//                     >
//                       Schedule Consultation
//                     </Button>
//                   </Stack>

//                   {/* Stats */}
//                   <Grid container spacing={2}>
//                     {[
//                       { value: "10,000+", label: "Students Guided" },
//                       { value: "99%", label: "Success Rate" },
//                       { value: "10+", label: "Years Experience" }
//                     ].map((stat, index) => (
//                       <Grid item xs={4} key={index}>
//                         <Typography variant="h4" sx={{
//                           fontWeight: 800,
//                           color: "#10e63eff",
//                           mb: 1,
//                           fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem" },
//                         }}>
//                           {stat.value}
//                         </Typography>
//                         <Typography variant="body2" sx={{
//                           color: "#ffffff",
//                           fontWeight: 600,
//                           fontSize: { xs: "0.7rem", sm: "0.8rem" },
//                           lineHeight: 1.2
//                         }}>
//                           {stat.label}
//                         </Typography>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Box>
//               </Fade>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Arpana Jain Profile Section - Mobile First */}
//       <Box sx={{
//         py: { xs: 6, md: 8 },
//         bgcolor: "#f8f9fa",
//       }}>
//         <Container maxWidth="lg">
//           <Fade in={true} timeout={1000}>
//             <Card sx={{
//               p: { xs: 2, sm: 3, md: 4 },
//               borderRadius: 2,
//               boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
//               background: "white",
//             }}>
//               <Grid container spacing={3} alignItems="center" sx={{ flexDirection: { xs: "column", md: "row" } }}>

//                 {/* Profile Image - Top on Mobile */}
//                 <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
//                   <Avatar
//                     sx={{
//                       width: { xs: 150, sm: 180, md: 200 },
//                       height: { xs: 150, sm: 180, md: 200 },
//                       mx: "auto",
//                       mb: 2,
//                       border: "3px solid #5ebeb6ff"
//                     }}
//                     src="/path-to-arpana-image.jpg"
//                     alt="Arpana Jain"
//                   />
//                   <Typography variant="h6" sx={{ fontWeight: 700, color: "#9e5349ff", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
//                     Arpana Jain
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#666", fontWeight: 600 }}>
//                     Co-founder & Career Coach
//                   </Typography>
//                 </Grid>

//                 {/* Profile Content - Bottom on Mobile */}
//                 <Grid item xs={12} md={8}>
//                   <Typography variant="body1" sx={{
//                     lineHeight: 1.7,
//                     color: "#333",
//                     fontSize: { xs: "0.9rem", sm: "1rem" },
//                     mb: 3,
//                     textAlign: { xs: "left", md: "justify" }
//                   }}>
//                     A counsellor with a passion for driving career clarity to the numerous students she enthusiastically mentors.
//                     Arpana has been involved in Teaching, Research, Consultancy and Training for the past 10 years.
//                     She believes that every individual student and parent who interacts with her adds valuable knowledge to her life.
//                     Packed with information & an objective standpoint towards her students' abilities & talents,
//                     she diligently guides them on their career plans.
//                   </Typography>

//                   {/* Key Highlights */}
//                   <Grid container spacing={1}>
//                     {[
//                       { icon: "⏳", label: "10+ Years Experience" },
//                       { icon: "📚", label: "Teaching & Research Background" },
//                       { icon: "💼", label: "Consultancy & Training" },
//                       { icon: "👥", label: "Student & Parent Counseling" }
//                     ].map((item, index) => (
//                       <Grid item xs={12} sm={6} key={index}>
//                         <Box sx={{ 
//                           display: "flex", 
//                           alignItems: "center", 
//                           mb: 1.5,
//                           p: 1,
//                           borderRadius: 1,
//                           bgcolor: "rgba(94, 190, 182, 0.1)"
//                         }}>
//                           <Box sx={{ 
//                             display: "flex", 
//                             alignItems: "center", 
//                             justifyContent: "center", 
//                             width: 32, 
//                             height: 32, 
//                             bgcolor: "#5ebeb6ff", 
//                             borderRadius: "50%", 
//                             mr: 2, 
//                             color: "white",
//                             fontSize: "16px",
//                             flexShrink: 0
//                           }}>
//                             {item.icon}
//                           </Box>
//                           <Typography variant="body2" sx={{ fontWeight: 600, fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
//                             {item.label}
//                           </Typography>
//                         </Box>
//                       </Grid>
//                     ))}
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Card>
//           </Fade>
//         </Container>
//       </Box>

//       {/* Pricing Section - Mobile First */}
//       <Box sx={{
//         py: { xs: 6, md: 8 },
//         bgcolor: "#f8f9fa",
//       }}>
//         <Container maxWidth="lg">
//           <Fade in={true} timeout={1000}>
//             <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontWeight: 800,
//                   mb: 2,
//                   fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//                   color: "#9e5349ff",
//                 }}
//               >
//                 Affordable Career Plans
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: 400,
//                   fontSize: { xs: "1rem", sm: "1.1rem" },
//                   color: "#666",
//                   maxWidth: "600px",
//                   mx: "auto",
//                   lineHeight: 1.5,
//                 }}
//               >
//                 Choose the perfect plan to unlock your career potential with expert guidance
//               </Typography>
//             </Box>
//           </Fade>

//           <Grid container spacing={2} justifyContent="center">
//             {pricingPlans.map((plan, index) => (
//               <Grid item xs={12} sm={6} md={3} key={plan.id}>
//                 <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
//                   <Card
//                     sx={{
//                       height: "100%",
//                       background: "white",
//                       borderRadius: 2,
//                       overflow: "hidden",
//                       boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//                       transition: "all 0.3s ease",
//                       border: plan.popular ? "2px solid #FF9800" : "1px solid #e0e0e0",
//                       "&:hover": {
//                         transform: "translateY(-5px)",
//                         boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
//                       },
//                     }}
//                     onClick={() => handlePlanClick(plan.id)}
//                   >
//                     {/* Popular Badge */}
//                     {plan.popular && (
//                       <Box
//                         sx={{
//                           position: "absolute",
//                           top: 0,
//                           right: 0,
//                           bgcolor: "#FF9800",
//                           color: "white",
//                           px: 2,
//                           py: 0.5,
//                           borderBottomLeftRadius: 8,
//                           fontSize: "0.7rem",
//                           fontWeight: 700,
//                           zIndex: 2,
//                         }}
//                       >
//                         POPULAR
//                       </Box>
//                     )}

//                     {/* Header */}
//                     <Box
//                       sx={{
//                         background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}CC 100%)`,
//                         py: 3,
//                         px: 2,
//                         textAlign: "center",
//                       }}
//                     >
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 700,
//                           color: "white",
//                           fontSize: { xs: "1.1rem", sm: "1.2rem" },
//                           mb: 1,
//                         }}
//                       >
//                         {plan.title}
//                       </Typography>
//                       <Typography
//                         variant="h4"
//                         sx={{
//                           fontWeight: 800,
//                           color: "white",
//                           fontSize: { xs: "1.8rem", sm: "2rem" },
//                         }}
//                       >
//                         {plan.price}
//                       </Typography>
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           color: "rgba(255,255,255,0.9)",
//                           fontWeight: 500,
//                         }}
//                       >
//                         One-time payment
//                       </Typography>
//                     </Box>

//                     {/* Features */}
//                     <Box sx={{ p: 2 }}>
//                       {plan.features.map((feature, featureIndex) => (
//                         <Box key={featureIndex} sx={{ display: "flex", alignItems: "flex-start", mb: 1.5 }}>
//                           <Box sx={{
//                             width: 18,
//                             height: 18,
//                             borderRadius: "50%",
//                             bgcolor: plan.color,
//                             mr: 1.5,
//                             mt: 0.2,
//                             flexShrink: 0,
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                             fontSize: "10px",
//                             color: "white",
//                             fontWeight: "bold",
//                           }}>
//                             ✓
//                           </Box>
//                           <Typography variant="body2" sx={{
//                             fontWeight: 500,
//                             color: "#333",
//                             fontSize: "0.85rem",
//                             lineHeight: 1.3,
//                           }}>
//                             {feature}
//                           </Typography>
//                         </Box>
//                       ))}

//                       {/* Button */}
//                       <Button
//                         variant="contained"
//                         fullWidth
//                         size="small"
//                         sx={{
//                           bgcolor: plan.color,
//                           color: "white",
//                           fontWeight: 700,
//                           py: 1,
//                           borderRadius: 1,
//                           fontSize: "0.9rem",
//                           textTransform: 'none',
//                           mt: 2,
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
//           <Fade in={true} timeout={1000}>
//             <Box sx={{ textAlign: "center", mt: 4 }}>
//               <Typography
//                 variant="body2"
//                 sx={{
//                   color: "#666",
//                   fontStyle: 'italic',
//                   fontSize: { xs: "0.9rem", sm: "1rem" },
//                 }}
//               >
//                 All plans include personalized attention and comprehensive support
//               </Typography>
//             </Box>
//           </Fade>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Home;


import React from 'react';
import { Box, Typography, Card, Grid, Container, Button, Stack, Paper, Fade, Slide, Avatar, Divider, Chip, } from '@mui/material';
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
      color: "#4CAF50",
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
      color: "#2196F3",
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
      color: "#FF9800",
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
      color: "#9C27B0",
      popular: false
    }
  ];

  const handlePlanClick = (planId) => {
    navigate(`/package/${planId}`);
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>

      {/* Hero Section - Fixed for Mobile */}
      <Box sx={{
        bgcolor: "#9e5349ff",
        py: { xs: 6, sm: 10, md: 15 },
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
          <Grid container spacing={4} alignItems="center" sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}>

            {/* Image Section - Fixed for Mobile */}
            <Grid item xs={12} md={6}>
              <Slide direction="left" in={true} timeout={800}>
                <Box
                  sx={{
                    width: { xs: "auto", sm: 350, md: "auto" },
                    height: { xs: "auto", sm: 350, md: 600 },
                    borderRadius: { xs: 2, md: 4 },
                    overflow: "hidden",
                    boxShadow: "0 15px 30px rgba(238, 234, 10, 0.3)",
                    mb: { xs: 3, md: 0 },
                  }}
                >
                  <img
                    src={heroImage}
                    alt="Career Guidance"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </Box>
              </Slide>
            </Grid>

            {/* Content Section */}
            <Grid item xs={12} md={6}>
              <Fade in={true} timeout={1000}>
                <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem", lg: "3.5rem" },
                      color: "#ffffff",
                      lineHeight: 1.2,
                      textAlign: { xs: "center", sm: "left" }
                    }}
                  >
                    Discover Your <Box component="span" sx={{ color: "#f8e800ff" }}>Potential</Box>
                    <br />
                    Design Your <Box component="span" sx={{ color: "#f8e800ff" }}>Career</Box>
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      color: "rgba(255,255,255,0.9)",
                      fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" },
                      lineHeight: 1.6,
                      fontWeight: 400,
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    Navigate the competitive world with strategic career planning. Our certified counselors and AI technology provide the edge you need for success.
                  </Typography>

                  {/* Features List */}
                  <Box sx={{ mb: 3 }}>
                    {[
                      {
                        text: "Expert Career Counselors",
                        icon: "👨‍💼" // Alternative: "🎓" or "💼"
                      },
                      {
                        text: "Certified Professionals",
                        icon: "✅" // Alternative: "🏅" or "⭐"
                      },
                      {
                        text: "Comprehensive Career Tests",
                        icon: "📊" // Alternative: "🔍" or "📝"
                      }
                    ].map((feature, index) => (
                      <Box key={index} sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: 1.5,
                        justifyContent: { xs: "flex-start", md: "flex-start" }
                      }}>
                        {/* Icon Container */}
                        <Box sx={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          bgcolor: "rgba(248, 232, 0, 0.2)",
                          mr: 2,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.2rem"
                        }}>
                          {feature.icon}
                        </Box>

                        {/* Text */}
                        <Typography variant="body1" sx={{
                          fontWeight: 600,
                          color: "#ffffff",
                          fontSize: { xs: "0.85rem", sm: "1rem" },
                        }}>
                          {feature.text}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Buttons */}
                  <Stack direction="row" spacing={2} sx={{ mb: 4, flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: "#f8e800ff",
                        color: "black",
                        fontWeight: 700,
                        px: { xs: 2, sm: 4 },
                        py: 1.5,
                        borderRadius: 2,
                        fontSize: { xs: "0.85rem", sm: "1rem" },
                        textTransform: 'none',
                        minWidth: { xs: "calc(50% - 8px)", sm: "auto" },
                        flex: { xs: "1 1 calc(50% - 8px)", sm: "none" },
                        '&:hover': {
                          bgcolor: "#e6d100",
                        }
                      }}
                    >
                      PSYCHOMETRIC TEST
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        border: "2px solid #f8e800ff",
                        color: "#f8e800ff",
                        fontWeight: 700,
                        px: { xs: 2, sm: 4 },
                        py: 1.3,
                        borderRadius: 2,
                        fontSize: { xs: "0.85rem", sm: "1rem" },
                        textTransform: 'none',
                        minWidth: { xs: "calc(50% - 8px)", sm: "auto" },
                        flex: { xs: "1 1 calc(50% - 8px)", sm: "none" },
                        '&:hover': {
                          border: "2px solid #f8e800ff",
                          bgcolor: "rgba(248, 232, 0, 0.1)",
                        }
                      }}
                    >
                      Schedule Consultation
                    </Button>
                  </Stack>
                  {/* Stats */}
                  <Grid container spacing={2}>
                    {[
                      { value: "10,000+", label: "Students Guided" },
                      { value: "99%", label: "Success Rate" },
                      { value: "10+", label: "Years Experience" }
                    ].map((stat, index) => (
                      <Grid item xs={4} key={index}>
                        <Typography variant="h4" sx={{
                          fontWeight: 800,
                          color: "#10e63eff",
                          mb: 0.5,
                          fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2rem" },
                        }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" sx={{
                          color: "#ffffff",
                          fontWeight: 600,
                          fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.8rem" },
                          lineHeight: 1.2
                        }}>
                          {stat.label}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

    {/* Vibha Gandhi Profile Section */}
<Box
  sx={{
    py: { xs: 3, md: 8 }, // Reduced mobile padding
    bgcolor: "linear-gradient(135deg, #fffce6 0%, #ffffff 100%)",
  }}
>
  <Container maxWidth="lg">
    <Card
      sx={{
        p: { xs: 2, sm: 4, md: 5 }, // Reduced mobile padding
        borderRadius: 3, // Slightly smaller radius
        boxShadow: "0 5px 20px rgba(0,0,0,0.08)", // Lighter shadow
        background: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Decorative Highlight */}
      <Box
        sx={{
          position: "absolute",
          top: -30, // Smaller decorative element
          right: -30,
          width: 80,
          height: 80,
          bgcolor: "#f8e800ff",
          borderRadius: "50%",
          opacity: 0.1, // More subtle
        }}
      />

      <Grid container spacing={3} alignItems="center"> {/* Reduced spacing */}
        {/* Left Section: Profile Image & Info */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Avatar
            sx={{
              width: { xs: 100, sm: 150, md: 180 }, // Smaller mobile avatar
              height: { xs: 100, sm: 150, md: 180 },
              mx: "auto",
              mb: 1.5, // Reduced margin
              border: "4px solid #f8e800ff", // Thinner border
              boxShadow: "0 3px 15px rgba(0,0,0,0.1)", // Lighter shadow
            }}
            src="/path-to-vibha-image.jpg"
            alt="Vibha Gandhi"
          >
            VG
          </Avatar>

          <Typography
            variant="h6" // Changed from h5 to h6 for mobile
            sx={{ 
              fontWeight: 700, 
              color: "#222", 
              mb: 0.5,
              fontSize: { xs: "1.2rem", sm: "1.5rem" } // Smaller font
            }}
          >
            Vibha Gandhi
          </Typography>

          {/* Rating */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 0.5 }}>
            {[...Array(5)].map((_, i) => (
              <Box
                key={i}
                sx={{ 
                  color: "#ffc107", 
                  fontSize: { xs: "1rem", sm: "1.3rem" }, // Smaller stars
                  mx: 0.2 
                }}
              >
                ★
              </Box>
            ))}
          </Box>
          <Typography variant="body2" sx={{ 
            color: "#666", 
            mb: 1,
            fontSize: { xs: "0.75rem", sm: "0.9rem" } // Smaller text
          }}>
            ⭐ 381 Reviews
          </Typography>

          <Typography
            variant="body2"
            sx={{ 
              color: "#444", 
              fontWeight: 500, 
              lineHeight: 1.4,
              fontSize: { xs: "0.75rem", sm: "0.9rem" } // Smaller text
            }}
          >
            Certified Career Counselor & NLP Practitioner, Indore
          </Typography>
        </Grid>

        {/* Right Section: Details */}
        <Grid item xs={12} md={8}>
          {/* Location & Tags */}
          <Stack
            direction="row"
            flexWrap="wrap"
            spacing={0.5} // Reduced spacing
            sx={{ mb: 2 }} // Reduced margin
          >
            <Chip
              label="Indore"
              size="small" // Smaller chips
              sx={{
                bgcolor: "#fff8cc",
                color: "#333",
                fontWeight: 600,
                fontSize: { xs: "0.7rem", sm: "0.9rem" },
                height: { xs: 24, sm: 32 }
              }}
            />
            <Chip
              label="Professionals | Students"
              size="small"
              sx={{
                bgcolor: "#fff8cc",
                color: "#333",
                fontWeight: 600,
                fontSize: { xs: "0.7rem", sm: "0.9rem" },
                height: { xs: 24, sm: 32 }
              }}
            />
          </Stack>

          {/* Experience & Sessions */}
          <Stack
            direction={{ xs: "column", sm: "row" }} // Stack vertically on mobile
            spacing={1} // Reduced spacing
            sx={{ mb: 2 }}
          >
            <Typography variant="body2" sx={{ 
              fontWeight: 600, 
              color: "#333",
              fontSize: { xs: "0.8rem", sm: "1rem" }
            }}>
              🏆 15+ Years Experience
            </Typography>
            <Typography variant="body2" sx={{ 
              fontWeight: 600, 
              color: "#333",
              fontSize: { xs: "0.8rem", sm: "1rem" }
            }}>
              👩‍💻 1441 Sessions
            </Typography>
          </Stack>

          {/* Availability */}
          <Box
            sx={{
              mb: 2, // Reduced margin
              p: 1.5, // Reduced padding
              bgcolor: "#fafafa",
              border: "1px solid #eee",
              borderRadius: 1.5, // Smaller radius
            }}
          >
            <Typography
              variant="body2"
              sx={{ 
                fontWeight: 600, 
                color: "#333", 
                mb: 0.5,
                fontSize: { xs: "0.8rem", sm: "0.9rem" }
              }}
            >
              📅 Available: Wed, 9AM – 6PM
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#f8e800ff",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: { xs: "0.75rem", sm: "0.9rem" }
              }}
            >
              See More ➤
            </Typography>
          </Box>

          {/* Services */}
          <Grid container spacing={1} sx={{ mb: 3 }}> {/* Reduced spacing and margin */}
            {[
              "Two Detailed Counselling Sessions",
              "1 Hour Counselling Duration",
              "22+ Pages Career Report",
              "6 Month Post Counselling Support",
              "Last Counselling: 2 days ago",
            ].map((service, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 0.5, // Reduced padding
                  }}
                >
                  <Box
                    sx={{
                      width: 16, // Smaller icon
                      height: 16,
                      borderRadius: "50%",
                      bgcolor: "#f8e800ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px", // Smaller checkmark
                      fontWeight: "bold",
                      mr: 1, // Reduced margin
                      flexShrink: 0
                    }}
                  >
                    ✓
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ 
                      fontWeight: 600, 
                      color: "#444",
                      fontSize: { xs: "0.75rem", sm: "0.85rem" }, // Smaller text
                      lineHeight: 1.3
                    }}
                  >
                    {service}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Book Button */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "#f8e800ff",
              color: "black",
              fontWeight: 700,
              py: 1, // Reduced padding
              borderRadius: 1.5, // Smaller radius
              fontSize: { xs: "0.9rem", sm: "1rem" }, // Smaller font
              textTransform: "none",
              boxShadow: "0 3px 10px rgba(248,232,0,0.3)", // Lighter shadow
              "&:hover": {
                bgcolor: "#e6d100",
              },
            }}
          >
            🚀 Book Appointment
          </Button>
        </Grid>
      </Grid>
    </Card>
  </Container>
</Box>


      {/* Pricing Section */}
<Box sx={{
  py: { xs: 5, md: 8 },
  bgcolor: "#f8f9fa",
}}>
  <Container maxWidth="lg">
    <Fade in={true} timeout={1000}>
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.7rem" },
            color: "#9e5349ff",
          }}
        >
          Affordable Career Plans
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            color: "#666",
            maxWidth: "600px",
            mx: "auto",
            lineHeight: 1.5,
          }}
        >
          Choose the perfect plan to unlock your career potential with expert guidance
        </Typography>
      </Box>
    </Fade>

    <Grid container spacing={2} justifyContent="center" alignItems="stretch">
      {pricingPlans.map((plan, index) => (
        <Grid item xs={6} sm={6} md={6} lg={3} key={plan.id}> {/* Changed xs={12} to xs={6} */}
          <Fade in={true} timeout={800} style={{ transitionDelay: `${index * 200}ms` }}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "white",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                border: plan.popular ? "2px solid #FF9800" : "1px solid #e0e0e0",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                },
                cursor: "pointer",
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
                    px: 2,
                    py: 0.5,
                    borderBottomLeftRadius: 8,
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    zIndex: 2,
                  }}
                >
                  POPULAR
                </Box>
              )}

              {/* Header */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${plan.color} 0%, ${plan.color}CC 100%)`,
                  py: 3,
                  px: 2,
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "white",
                    fontSize: { xs: "0.9rem", sm: "1.1rem", md: "1.2rem" }, // Adjusted font size
                    mb: 1,
                  }}
                >
                  {plan.title}
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 800,
                    color: "white",
                    fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2rem" }, // Adjusted font size
                  }}
                >
                  {plan.price}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "rgba(255,255,255,0.9)",
                    fontWeight: 500,
                    fontSize: { xs: "0.65rem", sm: "0.8rem" }, // Adjusted font size
                  }}
                >
                  One-time payment
                </Typography>
              </Box>

              {/* Features */}
              <Box sx={{
                p: 2,
                flex: 1,
                display: "flex",
                flexDirection: "column"
              }}>
                <Box sx={{ flex: 1 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <Box key={featureIndex} sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      mb: 1.5
                    }}>
                      <Box sx={{
                        width: 16, // Slightly smaller for mobile
                        height: 16,
                        borderRadius: "50%",
                        bgcolor: plan.color,
                        mr: 1.5,
                        mt: 0.2,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "9px", // Slightly smaller
                        color: "white",
                        fontWeight: "bold",
                      }}>
                        ✓
                      </Box>
                      <Typography variant="body2" sx={{
                        fontWeight: 500,
                        color: "#333",
                        fontSize: { xs: "0.75rem", sm: "0.85rem" }, // Adjusted font size
                        lineHeight: 1.3,
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
                  size="small"
                  sx={{
                    bgcolor: plan.color,
                    color: "white",
                    fontWeight: 700,
                    py: 1,
                    borderRadius: 1,
                    fontSize: { xs: "0.75rem", sm: "0.9rem" }, // Adjusted font size
                    textTransform: 'none',
                    mt: 'auto',
                    '&:hover': {
                      bgcolor: plan.color,
                      opacity: 0.9,
                    }
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
    <Fade in={true} timeout={1000}>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography
          variant="body2"
          sx={{
            color: "#666",
            fontStyle: 'italic',
            fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
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