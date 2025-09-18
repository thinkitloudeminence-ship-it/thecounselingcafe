// import React, { useState } from 'react';
// import {
//   AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, useMediaQuery, Link
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import PhoneIcon from '@mui/icons-material/Phone';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';

// export default function Navbar() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const navigate = useNavigate();

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [studentAnchor, setStudentAnchor] = useState(null);
//   const [parentAnchor, setParentAnchor] = useState(null);

//   const handleLogoClick = () => navigate('/');

//   return (
//     <AppBar 
//       position="sticky" 
//       elevation={0} 
//       sx={{ background: 'transparent', boxShadow: 'none' }}  // ✅ background remove
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

//         {/* ✅ Mobile View Logo */}
//         {isMobile && (
//           <Box
//             sx={{ cursor: 'pointer', display: "flex", alignItems: "center" }}
//             onClick={handleLogoClick}
//           >
//             <Typography variant="h6" sx={{ color: '#000', fontWeight: 700 }}>
//               THE Counseling Cafe
//             </Typography>
//           </Box>
//         )}

//         {/* ✅ Mobile View → Number Left, Hamburger Right */}
//         {isMobile ? (
//           <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
//             {/* Number left */}
//             <Link
//               href="tel:+919876543210"
//               underline="none"
//               sx={{ color: "#000", display: "flex", alignItems: "center", fontWeight: 600 }}
//             >
//               <PhoneIcon sx={{ mr: 0.5 }} />
//               +91 98765 43210
//             </Link>

//             {/* Hamburger right */}
//             <IconButton color="inherit" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//               <MenuIcon sx={{ color: '#000' }} />
//             </IconButton>
//           </Box>
//         ) : (
//           /* ✅ Desktop Layout */
//           <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>

//             {/* Logo Left */}
//             <Box
//               sx={{ cursor: "pointer", flex: "0 0 auto" }}
//               onClick={handleLogoClick}
//             >
//               <Typography variant="h6" sx={{ color: '#000', fontWeight: 700 }}>
//                 THE Counseling Cafe
//               </Typography>
//             </Box>

//             {/* Pages Center */}
//             <Box sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 2 }}>
//               <Button component={RouterLink} to="/about" sx={{ color: '#000' }}>ABOUT</Button>

//               <Button
//                 sx={{ color: '#000' }}
//                 onMouseEnter={(e) => setStudentAnchor(e.currentTarget)}
//                 onClick={(e) => setStudentAnchor(e.currentTarget)}
//               >
//                 STUDENT
//               </Button>
//               <Menu
//                 anchorEl={studentAnchor}
//                 open={Boolean(studentAnchor)}
//                 onClose={() => setStudentAnchor(null)}
//                 MenuListProps={{ onMouseLeave: () => setStudentAnchor(null) }}
//               >
//                 <MenuItem component={RouterLink} to="/student/career-test">Career Test</MenuItem>
//                 <MenuItem component={RouterLink} to="/student/career-counselling">Career Counselling</MenuItem>
//                 <MenuItem component={RouterLink} to="/student/competitive-exam">Competitive Exam Counselling</MenuItem>
//                 <MenuItem component={RouterLink} to="/student/college-counselling">College Counselling</MenuItem>
//                 <MenuItem component={RouterLink} to="/student/study-abroad">Study Abroad</MenuItem>
//                 <MenuItem component={RouterLink} to="/student/pricing">Pricing</MenuItem>
//               </Menu>

//               <Button
//                 sx={{ color: '#000' }}
//                 onMouseEnter={(e) => setParentAnchor(e.currentTarget)}
//                 onClick={(e) => setParentAnchor(e.currentTarget)}
//               >
//                 PARENTS
//               </Button>
//               <Menu
//                 anchorEl={parentAnchor}
//                 open={Boolean(parentAnchor)}
//                 onClose={() => setParentAnchor(null)}
//                 MenuListProps={{ onMouseLeave: () => setParentAnchor(null) }}
//               >
//                 <MenuItem component={RouterLink} to="/parents/personal-counselling">Personal Counselling</MenuItem>
//                 <MenuItem component={RouterLink} to="/parents/parenting">Parenting</MenuItem>
//                 <MenuItem component={RouterLink} to="/parents/career-counselling">Career Counselling</MenuItem>
//                 <MenuItem component={RouterLink} to="/parents/pricing">Pricing</MenuItem>
//               </Menu>

//               <Button component={RouterLink} to="/schools-colleges" sx={{ color: '#000' }}>SCHOOL & COLLEGES</Button>
//             </Box>

//             {/* Contact Right */}
//             <Box sx={{ flex: "0 0 auto" }}>
//               <Button component={RouterLink} to="/contact" sx={{ color: '#000', fontWeight: 600 }}>
//               Free career Test
//               </Button>
//             </Box>
//           </Box>
//         )}
//       </Toolbar>

//       {/* ✅ Mobile dropdown menu */}
//       {isMobile && mobileMenuOpen && (
//         <Box sx={{ bgcolor: '#fff', px: 2, pb: 2 }}>
//           <Button fullWidth component={RouterLink} to="/about" onClick={() => setMobileMenuOpen(false)}>ABOUT</Button>
//           <Box>
//             <Button fullWidth onClick={() => setMobileMenuOpen(false)}>STUDENT</Button>
//             <Box sx={{ pl: 2 }}>
//               <Button fullWidth component={RouterLink} to="/student/career-test" onClick={() => setMobileMenuOpen(false)}>Career Test</Button>
//               <Button fullWidth component={RouterLink} to="/student/career-counselling" onClick={() => setMobileMenuOpen(false)}>Career Counselling</Button>
//               <Button fullWidth component={RouterLink} to="/student/competitive-exam" onClick={() => setMobileMenuOpen(false)}>Competitive Exam</Button>
//               <Button fullWidth component={RouterLink} to="/student/college-counselling" onClick={() => setMobileMenuOpen(false)}>College Counselling</Button>
//               <Button fullWidth component={RouterLink} to="/student/study-abroad" onClick={() => setMobileMenuOpen(false)}>Study Abroad</Button>
//               <Button fullWidth component={RouterLink} to="/student/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Button>
//             </Box>
//           </Box>

//           <Box>
//             <Button fullWidth onClick={() => setMobileMenuOpen(false)}>PARENTS</Button>
//             <Box sx={{ pl: 2 }}>
//               <Button fullWidth component={RouterLink} to="/parents/personal-counselling" onClick={() => setMobileMenuOpen(false)}>Personal Counselling</Button>
//               <Button fullWidth component={RouterLink} to="/parents/parenting" onClick={() => setMobileMenuOpen(false)}>Parenting</Button>
//               <Button fullWidth component={RouterLink} to="/parents/career-counselling" onClick={() => setMobileMenuOpen(false)}>Career Counselling</Button>
//               <Button fullWidth component={RouterLink} to="/parents/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</Button>
//             </Box>
//           </Box>

//           <Button fullWidth component={RouterLink} to="/schools-colleges" onClick={() => setMobileMenuOpen(false)}>SCHOOL & COLLEGES</Button>
//           <Button fullWidth component={RouterLink} to="/contact" onClick={() => setMobileMenuOpen(false)}>Free career Test</Button>
//         </Box>
//       )}
//     </AppBar>
//   );
// }


import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, useMediaQuery, Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentAnchor, setStudentAnchor] = useState(null);
  const [parentAnchor, setParentAnchor] = useState(null);

  const handleLogoClick = () => navigate('/');

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ background: '#ffffffff', boxShadow: 'none' }}  // ✅ Changed background to black
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* ✅ Mobile View Logo */}
        {isMobile && (
          <Box
            sx={{ cursor: 'pointer', display: "flex", alignItems: "center" }}
            onClick={handleLogoClick}
          >
            <img
              src="/TCC logo.png"
              alt="THE Counseling Cafe"
              style={{ height: '40px' }}
            />
          </Box>
        )}

        {/* ✅ Mobile View → Number Left, Hamburger Right */}
        {isMobile ? (
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            {/* Number left */}
            <Link
              href="tel:+919876543210"
              underline="none"
              sx={{ color: "#000000ff", display: "flex", alignItems: "center", fontWeight: 600 }} // ✅ Changed to yellow
            >
              <PhoneIcon sx={{ mr: 0.5 }} />
              +91 98765 43210
            </Link>

            {/* Hamburger right */}
            <IconButton color="inherit" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <MenuIcon sx={{ color: '#FFD700' }} /> {/* ✅ Changed to yellow */}
            </IconButton>
          </Box>
        ) : (
          /* ✅ Desktop Layout */
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>

            {/* Logo Left */}
            <Box
              sx={{ cursor: "pointer", flex: "0 0 auto" }}
              onClick={handleLogoClick}
            >
              <img
                src="/TCC logo.png"
                alt="THE Counseling Cafe"
                style={{ height: '50px' }}
              />
            </Box>

            {/* Pages Center */}
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center", gap: 2 }}>
              <Button component={RouterLink} to="/about" sx={{ color: '#FFD700' }}>ABOUT</Button> {/* ✅ Changed to yellow */}

              <Button
                sx={{ color: '#FFD700' }} // ✅ Changed to yellow
                onMouseEnter={(e) => setStudentAnchor(e.currentTarget)}
                onClick={(e) => setStudentAnchor(e.currentTarget)}
              >
                STUDENT
              </Button>
              <Menu
                anchorEl={studentAnchor}
                open={Boolean(studentAnchor)}
                onClose={() => setStudentAnchor(null)}
                MenuListProps={{ onMouseLeave: () => setStudentAnchor(null) }}
                PaperProps={{
                  style: {
                    backgroundColor: '#000', // ✅ Menu background to black
                    color: '#FFD700' // ✅ Menu text to yellow
                  }
                }}
              >
                <MenuItem component={RouterLink} to="/student/career-test">Career Test</MenuItem>
                <MenuItem component={RouterLink} to="/student/career-counselling">Career Counselling</MenuItem>
                <MenuItem component={RouterLink} to="/student/competitive-exam">Competitive Exam Counselling</MenuItem>
                <MenuItem component={RouterLink} to="/student/college-counselling">College Counselling</MenuItem>
                <MenuItem component={RouterLink} to="/student/study-abroad">Study Abroad</MenuItem>
                <MenuItem component={RouterLink} to="/student/pricing">Pricing</MenuItem>
              </Menu>

              <Button
                sx={{ color: '#FFD700' }} // ✅ Changed to yellow
                onMouseEnter={(e) => setParentAnchor(e.currentTarget)}
                onClick={(e) => setParentAnchor(e.currentTarget)}
              >
                PARENTS
              </Button>
              <Menu
                anchorEl={parentAnchor}
                open={Boolean(parentAnchor)}
                onClose={() => setParentAnchor(null)}
                MenuListProps={{ onMouseLeave: () => setParentAnchor(null) }}
                PaperProps={{
                  style: {
                    backgroundColor: '#000000ff', // ✅ Menu background to black
                    color: '#FFD700' // ✅ Menu text to yellow
                  }
                }}
              >
                <MenuItem component={RouterLink} to="/parents/personal-counselling">Personal Counselling</MenuItem>
                <MenuItem component={RouterLink} to="/parents/parenting">Parenting</MenuItem>
                <MenuItem component={RouterLink} to="/parents/career-counselling">Career Counselling</MenuItem>
                <MenuItem component={RouterLink} to="/parents/pricing">Pricing</MenuItem>
              </Menu>

              <Button component={RouterLink} to="/schools-colleges" sx={{ color: '#FFD700' }}>SCHOOL & COLLEGES</Button> {/* ✅ Changed to yellow */}
            </Box>

            {/* Contact Right */}
            <Box sx={{ flex: "0 0 auto" }}>
              <Button component={RouterLink} to="/contact" sx={{ color: '#FFD700', fontWeight: 600 }}> {/* ✅ Changed to yellow */}
                Free career Test
              </Button>
            </Box>
          </Box>
        )}
      </Toolbar>

      {/* ✅ Mobile dropdown menu */}
      {isMobile && mobileMenuOpen && (
        <Box sx={{ bgcolor: '#000', px: 2, pb: 2 }}> {/* ✅ Changed background to black */}
          <Button fullWidth component={RouterLink} to="/about" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>ABOUT</Button> {/* ✅ Changed to yellow */}
          <Box>
            <Button fullWidth onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>STUDENT</Button> {/* ✅ Changed to yellow */}
            <Box sx={{ pl: 2 }}>
              <Button fullWidth component={RouterLink} to="/student/career-test" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Career Test</Button>
              <Button fullWidth component={RouterLink} to="/student/career-counselling" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Career Counselling</Button>
              <Button fullWidth component={RouterLink} to="/student/competitive-exam" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Competitive Exam</Button>
              <Button fullWidth component={RouterLink} to="/student/college-counselling" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>College Counselling</Button>
              <Button fullWidth component={RouterLink} to="/student/study-abroad" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Study Abroad</Button>
              <Button fullWidth component={RouterLink} to="/student/pricing" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Pricing</Button>
            </Box>
          </Box>

          <Box>
            <Button fullWidth onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>PARENTS</Button> {/* ✅ Changed to yellow */}
            <Box sx={{ pl: 2 }}>
              <Button fullWidth component={RouterLink} to="/parents/personal-counselling" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Personal Counselling</Button>
              <Button fullWidth component={RouterLink} to="/parents/parenting" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Parenting</Button>
              <Button fullWidth component={RouterLink} to="/parents/career-counselling" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Career Counselling</Button>
              <Button fullWidth component={RouterLink} to="/parents/pricing" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Pricing</Button>
            </Box>
          </Box>

          <Button fullWidth component={RouterLink} to="/schools-colleges" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>SCHOOL & COLLEGES</Button> {/* ✅ Changed to yellow */}
          <Button fullWidth component={RouterLink} to="/contact" onClick={() => setMobileMenuOpen(false)} sx={{ color: '#FFD700', justifyContent: 'flex-start' }}>Free career Test</Button> {/* ✅ Changed to yellow */}
        </Box>
      )}
    </AppBar>
  );
}