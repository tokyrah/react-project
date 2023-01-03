import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import { Button, Divider, Drawer, IconButton, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { AccountNavItem } from './AccountNavItem';
import { handleBreakpoints } from "@mui/system";

const items = [
  {
    href: '/cards',
    icon: (<ArrowForwardIosIcon fontSize="small" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Your Cards',
    subtitle: 'peipeiw'
  },
  {
    href: '/edit-profile',
    icon: (<ArrowForwardIosIcon fontSize="small" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Edite Profile',
    subtitle: ''
  },
  {
    href: '/change-username',
    icon: (<ArrowForwardIosIcon fontSize="small" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Change Username',
    subtitle: ''
  },
  {
    href: '/manage-review',
    icon: (<ArrowForwardIosIcon fontSize="small" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Manage Review',
    subtitle: ''
  },
  {
    href: '#',
    icon: '',
    title: 'Billing',
    subtitle: ''
  },
  {
    href: '/plan',
    icon: (<ArrowForwardIosIcon fontSize="small" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Your Plan',
    subtitle: 'Gold (trial)'
  },
  {
    href: '#',
    icon: '',
    title: 'Billing',
    subtitle: ''
  },
  {
    href: '/analytics',
    icon: (<OpenInNewOutlinedIcon fontSize="medium" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Analytics',
    subtitle: ''
  },
  {
    href: 'http:peipei@cardkiller.com',
    icon: (<ContentCopyIcon fontSize="medium" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Copy Profile Link',
    subtitle: ''
  },
  {
    href: '/logout',
    icon: (<LogoutIcon fontSize="medium" color="secondary" sx={{ marginTop: "3px" }} />),
    title: 'Logout',
    subtitle: ''
  }
];

export const AccountMenu = ({ open, onClose }) => {
  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          pb: 7
        }}
      >
        <Box sx={{ py: 2, position: 'relative' }}>
          <Button
            sx={{
              color: 'text.dark',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              textTransform: 'initial',
              fontWeight: 600
            }}
            onClick={onClose}
            variant="text"
            size="medium"
          >
            Close
          </Button>
          <Box sx={{ pt: 2 }}>
            <Typography
              sx={{
                textAlign: 'center',
                pb: 1.5
              }}
              component="div"
              variant="h2"
              color="text.dark"
            >
              Your account
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            height: 15,
            backgroundColor: '#f5f6fa'
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item, index) => (
            <AccountNavItem
              key={index}
              icon={item.icon}
              href={item.href}
              title={item.title}
              subtitle={item.subtitle}
              onClose={onClose}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: '#ffffff',
          width: '100%'
        }
      }}
    >
      {content}
    </Drawer>
  )
}

AccountMenu.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
