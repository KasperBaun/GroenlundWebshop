import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import MobXContext from "@stores/MobXContext";
import { observer } from "mobx-react-lite"
import { useContext } from "react";
import { BasketPageItem } from "./BasketPageItem";
import { Button, Divider, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { ExtentionMethods } from "@utils/ExtentionMethods";

export const BasketPage: React.FC = observer(function BasketPage() {
    const { basketStore, languageStore } = useContext(MobXContext);
    const navigate = useNavigate();
    const handleClick = () => { navigate('/checkout') }

    const getTotal = () => {
        let sum = 0;
        for (let i = 0; i < basketStore.Basket.length; i++) {
            sum = sum + basketStore.Basket[i].currentPrice;
        }
        return ExtentionMethods.formatPrice(sum, languageStore.getCurrentLanguageCode(), "DKK");
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <Card >
                    <Typography variant="h3" sx={{ padding: '1rem', paddingTop: '1rem' }}>{languageStore.currentLanguage.yourBasket}</Typography>
                    {basketStore.Basket.map((item, index) => (
                        <BasketPageItem key={item.id + index} item={item} />
                    ))}
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Card >
                    <div style={{ marginLeft: "1rem" }}>
                        <h3 style={{ paddingTop: "1rem" }}>{languageStore.currentLanguage.yourTotal}</h3>
                        <div >{languageStore.currentLanguage.subTotal} {getTotal()} </div>
                        <div >{languageStore.currentLanguage.procesFee} {0} </div>
                    </div>
                    <Divider />
                    <div style={{ fontWeight: "700", margin: "1rem" }}>{languageStore.currentLanguage.totalIncMoms} {getTotal()} </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem' }}>
                        <Button variant="contained" onClick={() => handleClick()} style={{ width: '50%', minHeight: '2rem', margin: '1.5rem', }}>{languageStore.currentLanguage.checkOutText} </Button>
                    </div>
                </Card>

                <Card >
                    <h5 style={{ paddingTop: "1rem", marginLeft: "1rem" }}>{languageStore.currentLanguage.addDiscountCode}</h5>

                    <div style={{ display: "flex", alignItems: "end", marginLeft: "1rem", marginBottom: "1rem" }}>
                        <TextField id="standard-basic1" label={languageStore.currentLanguage.discountCodeOptional} variant="standard" />
                        <Button variant="outlined">{languageStore.currentLanguage.addButton}</Button>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
});