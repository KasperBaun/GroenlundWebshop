import Loading from "@components/loading/Loading";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import MobXContext from "@stores/MobXContext";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import '../inventory.scss';

const InventoryCards = () => {
    
    const { CPVStore, languageStore } = useContext(MobXContext);

    if(CPVStore.CategoryProducts) {
        return (
            <Grid container spacing={2}>
                { CPVStore.CategoryProducts.map((item) => (
                    <Grid item xs>
                        <Card className="inventoryCard" sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    { languageStore.currentLanguage.InventoryAmountLabel + "" + item.totalProducts }
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )) }
            </Grid>
        )
    } else {
        return <Loading />
    }
}

export default observer(InventoryCards);