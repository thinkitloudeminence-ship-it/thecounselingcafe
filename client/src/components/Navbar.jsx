import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem, useMediaQuery, Link,
  Container, Chip, Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SchoolIcon from '@mui/icons-material/School';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GroupsIcon from '@mui/icons-material/Groups';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [studentAnchor, setStudentAnchor] = useState(null);
  const [parentAnchor, setParentAnchor] = useState(null);
  const [schoolAnchor, setSchoolAnchor] = useState(null);

  const handleLogoClick = () => navigate('/');

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        borderBottom: '1px solid rgba(248, 232, 0, 0.2)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 0,
          py: 1
        }}>

          {/* Logo */}
          <Fade in={true} timeout={800}>
            <Box
              sx={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: { xs: 120, md: 160 },
                height: { xs: 50, md: 70 },
                transition: 'transform 0.3s ease',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
              onClick={handleLogoClick}
            >
              <img
                src="/TCC logo.png"
                alt="The Counseling Cafe Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                }}
              />
            </Box>
          </Fade>

          {/* Desktop Menu */}
          {!isMobile && (
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
              gap: 1
            }}>
              <Button
                component={RouterLink}
                to="/about"
                startIcon={<PsychologyIcon />}
                sx={{
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  ':hover': {
                    bgcolor: '#f8e800ff',
                    color: '#000',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(248, 232, 0, 0.3)'
                  }
                }}
              >
                ABOUT
              </Button>

              {/* Student Menu */}
              <Button
                startIcon={<SchoolIcon />}
                sx={{
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  ':hover': {
                    bgcolor: '#f8e800ff',
                    color: '#000',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(248, 232, 0, 0.3)'
                  }
                }}
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
                  sx: {
                    bgcolor: '#fff',
                    color: '#000',
                    borderRadius: 2,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    mt: 1
                  }
                }}
              >
                <MenuItem
                  component={RouterLink}
                  to="/student/career-test"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Career Test
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/student/career-counselling"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Career Counselling
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/student/competitive-exam"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Competitive Exam Counselling
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/student/college-counselling"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  College Counselling
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/student/study-abroad"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Study Abroad
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/student/pricing"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Pricing
                </MenuItem>
              </Menu>

              {/* Parents Menu */}
              <Button
                startIcon={<FamilyRestroomIcon />}
                sx={{
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  ':hover': {
                    bgcolor: '#f8e800ff',
                    color: '#000',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(248, 232, 0, 0.3)'
                  }
                }}
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
                  sx: {
                    bgcolor: '#fff',
                    color: '#000',
                    borderRadius: 2,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    mt: 1
                  }
                }}
              >
                <MenuItem
                  component={RouterLink}
                  to="/parents/personal-counselling"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Personal Counselling
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/parents/parenting"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Parenting
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/parents/career-counselling"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Career Counselling
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/parents/pricing"
                  sx={{ fontWeight: 500, py: 1.5 }}
                >
                  Pricing
                </MenuItem>
              </Menu>

              {/* Schools & Colleges Menu */}
              <Button
                startIcon={<GroupsIcon />}
                sx={{
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  ':hover': {
                    bgcolor: '#f8e800ff',
                    color: '#000',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(248, 232, 0, 0.3)'
                  }
                }}
                onMouseEnter={(e) => setSchoolAnchor(e.currentTarget)}
                onClick={(e) => setSchoolAnchor(e.currentTarget)}
              >
                SCHOOL & COLLEGE
              </Button>
              <Menu
                anchorEl={schoolAnchor}
                open={Boolean(schoolAnchor)}
                onClose={() => setSchoolAnchor(null)}
                MenuListProps={{ onMouseLeave: () => setSchoolAnchor(null) }}
                PaperProps={{
                  sx: {
                    bgcolor: '#fff',
                    color: '#000',
                    borderRadius: 2,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                    mt: 1
                  }
                }}
              >
                <MenuItem sx={{ fontWeight: 500, py: 1.5 }}>Workshops</MenuItem>
                <MenuItem sx={{ fontWeight: 500, py: 1.5 }}>Career Guidance Programs</MenuItem>
                <MenuItem sx={{ fontWeight: 500, py: 1.5 }}>Faculty Training</MenuItem>
              </Menu>

              <Button
                component={RouterLink}
                to="/contact"
                startIcon={<ContactPageIcon />}
                sx={{
                  color: '#000',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  ':hover': {
                    bgcolor: '#f8e800ff',
                    color: '#000',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(248, 232, 0, 0.3)'
                  }
                }}
              >
                CONTACT
              </Button>
            </Box>
          )}

          {/* Right Section - CTA Button */}
          {!isMobile && (
            <Fade in={true} timeout={1000}>
              <Button
                component={RouterLink}
                to="/contact"
                sx={{
                  bgcolor: '#f8e800ff',
                  color: '#000',
                  borderRadius: 3,
                  fontWeight: 800,
                  px: 4,
                  py: 1.5,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 6px 20px rgba(248, 232, 0, 0.4)',
                  transition: 'all 0.3s ease',
                  ':hover': {
                    bgcolor: '#000',
                    color: '#f8e800ff',
                    transform: 'translateY(-3px)',
                    boxShadow: '0 10px 25px rgba(248, 232, 0, 0.6)'
                  },
                  minWidth: 180
                }}
              >
                FREE CAREER TEST
              </Button>
            </Fade>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              sx={{
                bgcolor: '#f8e800ff',
                color: '#000',
                ':hover': { bgcolor: '#000', color: '#f8e800ff' }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <Fade in={mobileMenuOpen}>
            <Box sx={{
              bgcolor: '#fff',
              borderRadius: 2,
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              mb: 2,
              overflow: 'hidden'
            }}>
              <Button
                fullWidth
                component={RouterLink}
                to="/about"
                startIcon={<PsychologyIcon />}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                  py: 2,
                  borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                ABOUT
              </Button>

              <Button
                fullWidth
                component={RouterLink}
                to="/student/career-test"
                startIcon={<SchoolIcon />}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                  py: 2,
                  borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                STUDENT
              </Button>

              <Button
                fullWidth
                component={RouterLink}
                to="/parents/personal-counselling"
                startIcon={<FamilyRestroomIcon />}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                  py: 2,
                  borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                PARENTS
              </Button>

              <Button
                fullWidth
                component={RouterLink}
                to="/schools-colleges"
                startIcon={<GroupsIcon />}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                  py: 2,
                  borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                SCHOOL & COLLEGE
              </Button>

              <Button
                fullWidth
                component={RouterLink}
                to="/contact"
                startIcon={<ContactPageIcon />}
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  justifyContent: 'flex-start',
                  px: 3,
                  py: 2,
                  borderBottom: '1px solid rgba(0,0,0,0.1)'
                }}
              >
                CONTACT
              </Button>

              <Button
                fullWidth
                component={RouterLink}
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                sx={{
                  bgcolor: '#f8e800ff',
                  color: '#000',
                  fontWeight: 800,
                  px: 3,
                  py: 2,
                  fontSize: '1rem'
                }}
              >
                FREE CAREER TEST
              </Button>
            </Box>
          </Fade>
        )}
      </Container>
    </AppBar>
  );
}