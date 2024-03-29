import { observer } from "mobx-react-lite"
import MobXContext from "@stores/MobXContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { Button, Grid } from "@mui/material";
import { ProductSearch } from "@components/productsearch/ProductSearch";
import { ProductCardWeb } from "./ProductCard";
import LoadingLion from "@components/loading/LoadingLion";

export const ProductsPage: React.FC = observer(function ProductListPage() {
    const { languageStore, webshopStore, searchStore } = useContext(MobXContext);

    /* Define the event handlers for the buttons */
    const handleOnShowMoreClicked = (): void => {
        searchStore.showMore();
    }

    const navigate = useNavigate();
    const handleOnProductClicked = (productId: number) => {
        navigate('/product/' + productId)
    }

    const ShowMoreButton: React.FC = () => {
        const moreItemsAvailableToShow = searchStore.productItems.length > 0 && searchStore.productItems.length > searchStore.displayedProductItems.length;
        if (moreItemsAvailableToShow) {
            return (
                <Grid item xs={12} display={'flex'} justifyContent={'center'} style={{ margin: '10px' }} >
                    <Button style={{ width: "12rem", marginRight: '10px', minWidth: '15vw' }} variant="contained" onClick={handleOnShowMoreClicked}>{languageStore.currentLanguage.showMore}</Button>
                </Grid>
            )
        } else {
            return <></>
        }
    }

    if (!webshopStore.isLoaded && !searchStore.isLoaded) {
        return <LoadingLion />
    } else {
        return (
            <Grid container >
                <Grid item xs={12}  >
                    <ProductSearch
                        searchText={searchStore.searchText}
                        setSearchText={searchStore.setSearchText}
                        categories={webshopStore.Categories}
                        subcategories={searchStore.selectedSubcategories}
                        displayItemsCount={searchStore.displayedProductItemsLength}
                        totalItemsCount={searchStore.totalItemsCount}
                        filterBySearchText={searchStore.filterBySearchText}
                        filterByCategory={searchStore.filterByCategory}
                        filterBySubcategory={searchStore.filterBySubcategory}
                        selectedCategory={searchStore.selectedCategory}
                        selectedSubcategory={searchStore.selectedSubcategory}
                        setSelectedSubcategory={searchStore.setSelectedSubcategory}
                        reset={searchStore.reset}
                        showSearchBar={true}
                    />
                </Grid>

                <Grid container  >
                    {searchStore.displayedProductItems.map((product, index) => (
                        <Grid
                            item xs={12} sm={6} md={4} lg={3} xl={3}
                            padding={1}
                            display='flex'
                            justifyContent={'center'}
                            key={"BackofficeCategoryCardItem" + index}
                            onClick={() => handleOnProductClicked(product.id)}
                        >
                            <ProductCardWeb data={product} />
                        </Grid>
                    ))}
                </Grid>
                <ShowMoreButton />
            </Grid >
        )
    }
});



