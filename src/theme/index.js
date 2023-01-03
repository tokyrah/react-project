import { NoEncryption } from '@mui/icons-material';
import { createTheme } from '@mui/material';
import { letterSpacing } from '@mui/system';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1000,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true
            },
            styleOverrides: {
                root: {
                    textTransform: 'initial',
                    letterSpacing: '-.4px',
                    textTransform: 'uppercase',
                    fontWeight: 400
                },
                sizeSmall: {
                    padding: '6px 16px'
                },
                sizeMedium: {
                    padding: '8px 24px'
                },
                sizeLarge: {
                    padding: '7px 30px'
                },
                textSizeSmall: {
                    padding: '7px 12px'
                },
                textSizeMedium: {
                    padding: '9px 16px'
                },
                textSizeLarge: {
                    padding: '12px 16px'
                },
                textInherit: {
                    color: '#000000'
                },
                startIcon: {
                    ".MuiSvgIcon-fontSizeSmall": {
                        fontSize: '1.2rem'
                    },
                    ".MuiSvgIcon-fontSizeMedium": {
                        fontSize: '1.5rem'
                    },
                    ".MuiSvgIcon-fontSizeLarge": {
                        fontSize: '1.8rem'
                    }
                },
                outlined: {
                    borderRadius: '20px',
                    fontSize: '.9rem',
                    fontWeight: '600',
                    textTransform: 'initial',
                    border: '2px solid #979797',
                    color: '#000000'
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    boxShadow: 'none',
                    border: '2px solid #E5E7EB',
                    borderRadius: '5px',
                    color: "#000000"
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {

                }
            }
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: {
                    variant: 'h6'
                },
                subheaderTypographyProps: {
                    variant: 'body2'
                }
            },
            styleOverrides: {
                root: {
                    padding: '32px 24px'
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                '*': {
                    boxSizing: 'border-box',
                    margin: 0,
                    padding: 0
                },
                html: {
                    MozOsxFontSmoothing: 'grayscale',
                    WebkitFontSmoothing: 'antialiased',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                body: {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%'
                },
                '#__next': {
                    display: 'flex',
                    flex: '1 1 auto',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%'
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: '#F3F4F6',
                    '.MuiTableCell-root': {
                        color: '#374151'
                    },
                    borderBottom: 'none',
                    '& .MuiTableCell-root': {
                        borderBottom: 'none',
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: 1,
                        letterSpacing: 0.5,
                        textTransform: 'uppercase'
                    },
                    '& .MuiTableCell-paddingCheckbox': {
                        paddingTop: 4,
                        paddingBottom: 4
                    }
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#000'
                },
                colorPrimary: {
                    color: '#265cb4'
                },
                colorSecondary: {
                    color: '#979797'
                },
                colorAction: {
                    color: '#43d16d'
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: '#000',
                    fontSize: '15px'
                },
                select: {
                    paddingRight: '15px !important'
                }
            }
        },
        MuiListItem: {
            styleOverrides: {
                root: {
                    color: '#000000'
                }
            }
        },
        MuiSwitch: {
            styleOverrides: {
                root: {
                    width: '54px',
                    height: '42px',
                    padding: '11px'
                },
                thumb: {
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%'
                },
                switchBase: {
                    padding: '13px',
                    borderRadius: '50%',
                    '&.Mui-checked': {
                        color: '#ffffff',
                        transform: 'translateX(12px)',
                        '+.MuiSwitch-track': {
                            opacity: '1',
                            backgroundColor: '#265cb4',
                        }
                    }
                },
                track: {
                    opacity: '1',
                    backgroundColor: '#979797',
                    borderRadius: '15px'
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#D1D5DB',
                    width: '100%',
                    border: 0,
                    height: '1px',
                    "&.MuiDivider-vertical": {
                        width: '1px',
                        height: '100%'
                    }
                },
                wrapper: {
                    fontWeight: '600',
                    fontSize: '.9rem',
                    lineHeight: '1.375',
                    color: '#979797',
                },
                withChildren: {
                    background: 'none',
                    height: 'inherit',
                    alignItems: 'center',
                    "&:before": {
                        backgroundColor: '#9CA3AF',
                        width: '100%',
                        border: 0,
                        height: '1px'
                    },
                    "&:after": {
                        backgroundColor: '#9CA3AF',
                        width: '100%',
                        border: 0,
                        height: '1px'
                    }
                }

            }
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    "&.BorderRadiusTop": {
                        ".MuiPaper-root": {
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px'
                        }
                    },
                    ".MuiBackdrop-root": {
                        backgroundColor: 'transparent'
                    }
                }
            }
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    minWidth: '110px !important',
                    marginTop: '10px'
                }
            }

        },
        MuiInputLabel: {
            styleOverrides: {
                outlined: {
                    top: '-3px',
                    "&.Mui-focused": {
                        top: 0
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: '13px 15px'
                },
                notchedOutline: {
                    borderColor: '#E6E8F0'
                }
            }
        },
    },
    palette: {
        neutral: {
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827'
        },
        action: {
            active: '#6B7280',
            focus: 'rgba(55, 65, 81, 0.12)',
            hover: 'rgba(55, 65, 81, 0.04)',
            selected: 'rgba(55, 65, 81, 0.08)',
            disabledBackground: 'rgba(55, 65, 81, 0.12)',
            disabled: 'rgba(55, 65, 81, 0.26)'
        },
        background: {
            default: '#F9FAFC',
            paper: '#FFFFFF'
        },
        divider: '#E6E8F0',
        primary: {
            main: '#265cb4',
            light: '#828DF8',
            dark: '#3832A0',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#10B981',
            light: '#3FC79A',
            dark: '#0B815A',
            contrastText: '#FFFFFF'
        },
        success: {
            main: '#14B8A6',
            light: '#43C6B7',
            dark: '#0E8074',
            contrastText: '#FFFFFF'
        },
        info: {
            main: '#2196F3',
            light: '#64B6F7',
            dark: '#0B79D0',
            contrastText: '#FFFFFF'
        },
        warning: {
            main: '#FFB020',
            light: '#FFBF4C',
            dark: '#B27B16',
            contrastText: '#FFFFFF'
        },
        error: {
            main: '#D14343',
            light: '#DA6868',
            dark: '#922E2E',
            contrastText: '#FFFFFF'
        },
        text: {
            primary: '#265cb4',
            secondary: '#979797',
            light: '#9CA3AF',
            dark: '#000000',
            disabled: 'rgba(55, 65, 81, 0.48)'
        }
    },
    shape: {
        borderRadius: 8
    },
    shadows: [
        'none',
        '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
        '0px 1px 2px rgba(100, 116, 139, 0.12)',
        '0px 1px 4px rgba(100, 116, 139, 0.12)',
        '0px 1px 5px rgba(100, 116, 139, 0.12)',
        '0px 1px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 6px rgba(100, 116, 139, 0.12)',
        '0px 3px 6px rgba(100, 116, 139, 0.12)',
        '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
        '0px 5px 12px rgba(100, 116, 139, 0.12)',
        '0px 5px 14px rgba(100, 116, 139, 0.12)',
        '0px 5px 15px rgba(100, 116, 139, 0.12)',
        '0px 6px 15px rgba(100, 116, 139, 0.12)',
        '0px 7px 15px rgba(100, 116, 139, 0.12)',
        '0px 8px 15px rgba(100, 116, 139, 0.12)',
        '0px 9px 15px rgba(100, 116, 139, 0.12)',
        '0px 10px 15px rgba(100, 116, 139, 0.12)',
        '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
        '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
        '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)',
        '0px 25px 50px rgba(100, 116, 139, 0.25)'
    ],
    typography: {
        button: {
            fontWeight: 600
        },
        //fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '-.4px'
        },
        body2: {
            fontSize: '0.82rem',
            fontWeight: '600',
            lineHeight: 1.57,
            letterSpacing: '-.4px'
        },
        body3: {
            fontSize: '0.9rem',
            fontWeight: '600',
            lineHeight: 1.2,
            letterSpacing: '-.4px'
        },
        subtitle1: {
            fontSize: '0.95rem',
            fontWeight: '600',
            lineHeight: 1.57,
            letterSpacing: '-.4px'
        },
        subtitle2: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: '-.4px'
        },
        subtitle3: {
            fontSize: '1.07rem',
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: '-.4px'
        },
        overline: {
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.4px',
            lineHeight: 2.5,
            textTransform: 'uppercase',
            letterSpacing: '-.4px'
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
            letterSpacing: '-.4px'
        },
        h1: {
            fontWeight: 700,
            fontSize: '2rem',
            lineHeight: 1.167,
            letterSpacing: '-.4px'
        },
        h2: {
            fontWeight: 600,
            fontSize: '1.6rem',
            lineHeight: 1.235,
            letterSpacing: '-.4px'
        },
        h3: {
            fontWeight: 600,
            fontSize: '1.3rem',
            lineHeight: 1.334,
            letterSpacing: '-.4px'
        },
        h4: {
            fontWeight: 600,
            fontSize: '1.125rem',
            lineHeight: 1.6,
            letterSpacing: '-.4px'
        },
        h5: {
            fontWeight: 600,
            fontSize: '1.03rem',
            lineHeight: 1.375,
            letterSpacing: '-.4px'
        },
        h6: {
            fontWeight: 600,
            fontSize: '.9rem',
            lineHeight: 1.75,
            letterSpacing: '-.4px'
        }
    }
});
