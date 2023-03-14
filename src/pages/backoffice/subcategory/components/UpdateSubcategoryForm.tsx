import Category from "@models/Category";
import SubCategory from "@models/SubCategory";
import MobXContext from "@stores/MobXContext";
import { useContext, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";

interface IProps {
    subcategory: SubCategory;
    onSubmitClicked: () => void;
}

const UpdateForm = ({ subcategory, onSubmitClicked }: IProps) => {

    const { subCategoryStore, categoryStore, languageStore } = useContext(MobXContext);

    const [title, setTitle] = useState<string>(subcategory.name ? subcategory.name : "");
    const [url, setUrl] = useState<string>(subcategory.imageUrl ? subcategory.imageUrl : "");
    const [order, setOrder] = useState<number>(subcategory.order ? subcategory.order : 0);
    const [description, setDescription] = useState<string>(subcategory.description ? subcategory.description : "");
    const [selectedCategory, setSelectedCategory] = useState<Category>(subcategory.category ? subcategory.category : null);

    async function updateSubcategory(): Promise<void> {
        const subCategory: SubCategory = {
            id: subcategory.id,
            name: title,
            imageUrl: url,
            order: order,
            description: description,
            categoryId: selectedCategory.id,
            category: selectedCategory
        };

        if (!emptyValueCheck(subCategory)) {
            alert(`${languageStore.currentLanguage.createSubCategoryMissingFieldsMessage}
            ${languageStore.currentLanguage.createSubCategoryCategoryTitle}
            ${languageStore.currentLanguage.createSubCategoryTitle}
            ${languageStore.currentLanguage.createSubCategoryOrder}
           `)
            return;
        }

        try {
            await subCategoryStore.updateSubCategory(subCategory)
            // TODO: Change this notification to a toast or something that does not require the user to click a button to confirm.
            alert(languageStore.currentLanguage.createSubCategoryUpdateSuccessMessage);
            onSubmitClicked();
        }
        catch (err) {
            console.log(err);
            alert(languageStore.currentLanguage.createSubCategoryUpdateFailedMessage);
        }
    }

    function emptyValueCheck(subcategory: SubCategory): boolean {
        if (!subcategory.name || subcategory.name === "") {
            return false;
        }
        if (!subcategory.order || subcategory.order === 0) {
            return false;
        }
        if (!subcategory.category || subcategory.category === null) {
            return false;
        }
        if (!subcategory.categoryId || subcategory.categoryId === 0) {
            return false;
        }
        return true;
    }

    function handleOptionChange(event: any): React.ChangeEventHandler<HTMLSelectElement> {

        const categoryId: number = parseInt(event.currentTarget.value);
        const category = categoryStore.getCategory(categoryId);
        subcategory.category = category;
        subcategory.categoryId = categoryId;
        setSelectedCategory(category);
        return;

    };

    if (!subcategory) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    } else {
        return (
            <Form>
                <Form.Group className="UpdateFormImageFormGroup">
                    <Image className="UpdateFormImage" src={subcategory.imageUrl ? subcategory.imageUrl : ""} alt="No image" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{languageStore.currentLanguage.createSubCategoryCategoryTitle}</Form.Label>
                    <Form.Select aria-label="Select category" onChange={handleOptionChange}>
                        <option key="initKey" value={subcategory.categoryId} >{subcategory.category.name}</option>
                        {categoryStore.Categories.map((category, index) => {
                            return (
                                <option key={"option" + category.name + index} value={category.id}>{category.name}</option>
                            )
                        })}

                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>{languageStore.currentLanguage.createSubCategoryTitle}</Form.Label>
                    <Form.Control value={title} type="text" onChange={(event) => {
                        let temp = event.target.value;
                        setTitle(temp);
                    }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{languageStore.currentLanguage.createSubCategoryOrder}</Form.Label>
                    <Form.Control value={order} type="text" onChange={(event) => {
                        let temp = event.target.value;
                        setOrder(parseInt(temp));
                    }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{languageStore.currentLanguage.createSubCategoryImgUrl}</Form.Label>
                    <Form.Control value={url} type="text" onChange={(event) => {
                        let temp = event.target.value;
                        setUrl(temp);
                    }} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>{languageStore.currentLanguage.createSubCategoryDescription}</Form.Label>
                    <Form.Control value={description} type="textarea" onChange={(event) => {
                        let temp = event.target.value;
                        setDescription(temp);
                    }} />
                </Form.Group>
                <Button variant="primary" onClick={updateSubcategory} style={{ marginTop: "0.5rem" }} >
                    {languageStore.currentLanguage.createSubCategoryUpdate}
                </Button>
            </Form>
        )
    }
}

export default UpdateForm;