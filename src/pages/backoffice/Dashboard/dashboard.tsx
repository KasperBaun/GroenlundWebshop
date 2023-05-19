import { Box, FormControl, Grid, InputLabel, Link, MenuItem, Select, Typography } from "@mui/material";
import MobXContext from "@stores/MobXContext";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { RecentSalesList } from "@backoffice/sales/components/RecentSales";
import { observer } from "mobx-react-lite";
import { RevenueInfoBox } from "./components/RevenueInfoBox";
import { NotificationInfoBox } from "./components/NotificationInfoBox";
import { ResultsInfoBox } from "./components/ResultsInfoBox";
import OrderDetailsList from "@backoffice/orders/components/OrderDetailsList";
import { KpiInfoBox } from "./components/KpiInfoBox";
import { EconomyWidget } from "./components/EconomyWidget";
import { ProductsTable } from "./components/ProductsTable";

export type DashboardProps = {
    setNavKey: Dispatch<SetStateAction<number>>;
}

export const Dashboard: React.FC<DashboardProps> = observer((props: DashboardProps) => {
    const { languageStore, backofficeStore } = useContext(MobXContext);
    const [year, setYear] = useState<number>(2023);

    const navigateToSales = () => props.setNavKey(6);
    const navigateToOrders = () => props.setNavKey(7);

    const handleYearChange = (event: any): React.ChangeEventHandler<HTMLSelectElement> => {
        setYear(event.target.value as number);
        return;
    };

    const spacing = 2;
    const worstSellingProducts = backofficeStore.ProductItems.filter(p => p.sold === false).sort((a, b) => a.createdDate.getTime() - b.createdDate.getTime()).slice(0, 20).map(p => p.product);

    return (
        <>
            <Grid container sx={containerStyling} spacing={spacing} >

                {/* First row with 3 information boxes - revenue, storagevalue, tbd */}
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Box sx={informationItemStyling} >
                        <FormControl >
                            <InputLabel>{languageStore.currentLanguage.select + " " + languageStore.currentLanguage.year}</InputLabel>
                            <Select
                                label={languageStore.currentLanguage.select + " " + languageStore.currentLanguage.year}
                                value={year ? year : ''}
                                onChange={handleYearChange}
                                aria-label={languageStore.currentLanguage.select + languageStore.currentLanguage.year}>
                                {backofficeStore.getYearsAvailable().map((year) => (
                                    <MenuItem key={year} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>



                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                    <Box sx={informationItemStyling} >
                        <Typography variant="h4" > {languageStore.currentLanguage.notifications} </Typography>
                        <NotificationInfoBox />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Box sx={informationItemStyling}>
                        <Typography variant="h4" > {languageStore.currentLanguage.revenue} </Typography>
                        <RevenueInfoBox year={year} />
                    </Box>
                </Grid>


            </Grid>


            {/* Second row with 2 charts containing revenue and expenses. And then resultstable*/}
            <Grid container sx={containerStyling} spacing={spacing}>

                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                    <Box sx={dashboardItemStyling} >
                        <Typography variant="h4">{languageStore.currentLanguage.kpi}</Typography>
                        <KpiInfoBox year={year} />
                    </Box>
                </Grid>


                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  >
                    <Box sx={dashboardItemStyling} >
                        <Typography variant="h4" >{languageStore.currentLanguage.results}</Typography>
                        <ResultsInfoBox year={year} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} >
                    <Box sx={dashboardItemStyling} >
                        <Typography variant="h4">{languageStore.currentLanguage.revenue + " " + languageStore.currentLanguage.and.toLowerCase() + " " + languageStore.currentLanguage.expenses.toLowerCase()}</Typography>
                        <EconomyWidget year={year} />
                    </Box>
                </Grid>


            </Grid >


            {/* Third row with best selling products and the products that have been on the shelf the longest*/}
            <Grid container sx={containerStyling} spacing={spacing} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <Box sx={dashboardItemStyling} >
                        <Typography variant="h4">{languageStore.currentLanguage.bestSellingProducts}</Typography>
                        <ProductsTable products={backofficeStore.BestSellingProducts} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <Box sx={dashboardItemStyling} >
                        <Typography variant="h4">{languageStore.currentLanguage.worstSellingProducts}</Typography>
                        <ProductsTable products={worstSellingProducts} />
                    </Box>
                </Grid>
            </Grid >

            {/* Fourth row with current state of the business orders and sales*/}
            <Grid container sx={containerStyling} spacing={spacing} style={{ marginBottom: 2 }} >
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box sx={dashboardItemStyling} >
                        <Typography variant="h4" display='flex' justifyContent={'space-between'}>
                            {languageStore.currentLanguage.OrderDetailsListTitle}
                            <Link color="primary" onClick={navigateToOrders} sx={{ mt: 0, '&:hover': { cursor: 'pointer' } }}>
                                {languageStore.currentLanguage.goToOrders}
                            </Link>
                        </Typography>
                        <OrderDetailsList tableHeight={450} origin={""} />

                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <Box sx={dashboardItemStyling} >
                        <Typography variant="h4" display='flex' justifyContent={'space-between'}>
                            {languageStore.currentLanguage.RecentSalesWidgetTitle}
                            <Link color="primary" onClick={navigateToSales} sx={{ mt: 0, '&:hover': { cursor: 'pointer' } }}>
                                {languageStore.currentLanguage.goToSales}
                            </Link>
                        </Typography>
                        <RecentSalesList displayNumberOfItems={20} />
                    </Box>
                </Grid>
            </Grid >
        </>
    )
});

const informationItemStyling: React.CSSProperties = {
    height: "20vh",
    minWidth: "20vh",
    borderRadius: "5px",
    padding: '10px',
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: 'flex',
    flexDirection: 'column'
};

const dashboardItemStyling: React.CSSProperties = {
    ...informationItemStyling,
    height: "50vh",
};

const containerStyling: React.CSSProperties = {
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
};