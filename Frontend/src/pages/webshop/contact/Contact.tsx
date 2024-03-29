import GroendlundLogo from "@components/svgs/GroenlundLogo";
import { CallRounded, DvrRounded, EmailRounded, Facebook, HomeRounded, Instagram, LocationCityRounded, Mail } from "@mui/icons-material";
import { Button, Card, CardContent, CardHeader, Container, Grid, Tooltip, Typography } from "@mui/material";
import MobXContext from "@stores/MobXContext";
import { Constants } from "@utils/Constants";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

export const ContactPage: React.FC = observer(() => {

    const { languageStore } = useContext(MobXContext);
    const primaryColor = Constants.primaryColor;

    return (
        <Container>
            <Grid container
                spacing={4}
                justifyContent={'center'}
                display={'flex'}
                flexDirection={'column'}
                alignContent={'center'}
            >
                <Grid item xs={12} md={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <GroendlundLogo color={primaryColor} />
                </Grid>
            </Grid>
            <Grid container
                spacing={2}
                display={'flex'}
            >

                <Grid item xs={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} >
                    <Card sx={{ minHeight: '30vh', minWidth: '80%', boxShadow: 'none' }}>
                        <CardHeader title={<Typography variant="h4" color={primaryColor}>{languageStore.currentLanguage.opening_days}</Typography>} />
                        <CardContent>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.monday_text} :</b> {languageStore.currentLanguage.closed_text}</Typography>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.tuesday_text} :</b> 12.00-17.00</Typography>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.wednesday_text} :</b> 13.00-18.00</Typography>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.thursday_text} :</b> 12.00-17.00</Typography>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.friday_text} :</b> 12.00-17.00</Typography>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.saturday_text} :</b> {languageStore.currentLanguage.per_agreement_text}</Typography>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.sunday_text} :</b> {languageStore.currentLanguage.closed_text}</Typography>
                            <Typography variant="body1"><b>{languageStore.currentLanguage.public_holiday_text} :</b> {languageStore.currentLanguage.closed_text}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={6} xl={6} display={'flex'} justifyContent={'center'} >
                    <Card sx={{ minHeight: '30vh', minWidth: '80%', boxShadow: 'none' }}>
                        <CardHeader title={<Typography variant="h4" color={primaryColor} >{languageStore.currentLanguage.contact_information}</Typography>} />
                        <CardContent>
                            <Typography variant="body1"><CallRounded /> <b>{languageStore.currentLanguage.phone_text}:</b> {Constants.companyTelephoneNumber}</Typography>
                            <Typography variant="body1"><EmailRounded /> <b>{languageStore.currentLanguage.email_text}:</b> {Constants.companyEmail}</Typography>
                            <Typography variant="body1"><DvrRounded /> <b>{languageStore.currentLanguage.cvr_nr_text}:</b> 39821044</Typography>

                            <Tooltip title={languageStore.currentLanguage.mapsLocation} >
                                <Typography variant="body1">


                                    <HomeRounded /> <b>{languageStore.currentLanguage.address_text}: </b>
                                    <a href={Constants.mapsLink} target="_blank" rel="noreferrer">
                                        {Constants.companyStreet} {Constants.companyZipcode} {Constants.companyCity}
                                    </a>
                                </Typography>
                            </Tooltip>

                            <Typography variant="body1"><Instagram /> <b>{languageStore.currentLanguage.instagram}:</b> <a href={Constants.instagramUrl} target="_blank" rel="noreferrer">{Constants.instagramUrl}</a></Typography>
                            <Typography variant="body1"><Facebook /> <b>{languageStore.currentLanguage.facebook}:</b> <a href={Constants.facebookUrl} target="_blank" rel="noreferrer">https://www.facebook.com</a></Typography>


                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} display="flex" justifyContent={'center'}>
                    <CustomButton url={Constants.mapsLink} text={languageStore.currentLanguage.mapsLocation} icon={<LocationCityRounded sx={{ paddingRight: '5px' }} />} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} display="flex" justifyContent={'center'}>
                    <CustomButton url={Constants.facebookUrl} text={languageStore.currentLanguage.writeOnFacebook} icon={<Facebook sx={{ paddingRight: '5px' }} />} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} display="flex" justifyContent={'center'}>
                    <CustomButton url={"mailto:" + Constants.companyEmail} text={languageStore.currentLanguage.email_text} icon={<Mail sx={{ paddingRight: '5px' }} />} />
                </Grid>
            </Grid>
        </Container>
    )
});

type CustomButtonProps = {
    url: string,
    text: string,
    icon: JSX.Element
}

const CustomButton: React.FC<CustomButtonProps> = ({ url, text, icon }: CustomButtonProps) => {
    return (
        <Button
            variant="contained"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                width: '85%',
                transition: "box-shadow 0.2s ease-in-out",
                '&:hover': {
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.6)",
                    cursor: "pointer",
                }
            }}>
            <Typography variant="body1" color="white" sx={{ padding: '5px', display: 'flex' }}>{icon} {text}</Typography>
        </Button>
    )
};
