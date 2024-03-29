import { ILocale } from "./ILocale";

export class ENLocale implements ILocale {

  getQuality(qualityType: number): string {
    switch (qualityType) {
      case 1: return "1. Quality";
      case 2: return "2. Quality";
      case 3: return "3. Quality";
      default: return "Sorting not defined";
    }
  }

  getCondition(conditionType: number): string {
    switch (conditionType) {
      case 1: return "No shards";
      case 2: return "Few shards";
      case 3: return "Many shards";
      default: return "Condition not defined";
    }
  }

  getMaterialType(materialType: number): string {
    switch (materialType) {
      case 1: return "Porcelain";
      case 2: return "Steel";
      case 3: return "Glass";
      case 4: return "Gold";
      case 5: return "Silver";
      case 6: return "Ceramics";
      case 7: return "Stoneware";
      case 8: return "Fajance";
      default: return "Material not defined";
    }
  }

  create = "Create";
  cancel = "Cancel";
  update = "Update";
  delete = "Delete";
  product = "Product";
  products = "Products";
  reset = "Reset";
  search = "Search";
  showAll = "Show All";
  showMore = "Show more";
  sold = "Sold";
  forSale = "For sale";
  price = "Price";
  description = "Description";
  settings = "Settings";
  notifications = "Notifications";
  noProductsAvailable = "There is currrently no products available in this category";
  createProduct = "Create Product";
  editProduct = "Edit Product";
  deleteProduct = "Delete Product";
  productImages = "Product Images";
  manufacturer = "Manufacturer";
  selectMaterial = "Select Material";
  name = "Name";
  modelNumber = "Modelnumber";
  callUs = "Call us";
  writeOnFacebook = "Write on Facebook";
  mapsLocation = "Google Maps location";
  city = "City";
  instagram = "Instagram";
  facebook = "Facebook";
  sendAnEmail = "Send an email";
  language = "Language";
  condition = "Condition";
  quality = "Quality";
  addToBasket = "Add to basket";
  design = "Design";
  material = "Material";
  modelSpecifications = "Model specifications";
  productInfoHeadline = "General info";
  selectSubcategory = "Select subcategory";
  filterBySubcategory = "Filter by subcategory";
  selectCategory = "Select category";
  filterByCategory = "Filter by category";
  signIn = "SIGN IN";
  signUp = "Sign Up";
  forgotPassword = "Forgot Password?";
  alreadyHaveAccount = "Already have an account? Sign in";
  dontHaveAccount = "Don't have an account? Sign Up";
  rememberMe = "Remember me";
  firstName = "First Name";
  lastName = "Last Name";
  emailAdress = "Email Address";
  password = "Password";
  createSuccess = "Create Success";
  createFailed = "Create Failed";
  updateSuccess = "Update Success";
  updateFailed = "Update Failed";
  deleteSuccess = "Delete Success";
  deleteFailed = "Delete Failed";
  confirmDeleteText = "Are you sure you want to delete this item?";
  weight = "Weight";
  dimension = "Dimension";
  year = "Year";
  select = "Select";
  revenue = "Revenue";
  danishCurrency = "DKK";
  kroner = "Kr."
  more = "More";
  than = "Than";
  less = "Less";
  month = "Month";
  last = "Last";
  storage = "Storage";
  value = "Value";
  inventory = "Inventory";
  currency = "USD";
  expenses = "Expenses";
  result = "Result";
  results = "Results";
  inventoryValue = "Inventoryvalue";
  yearToDate = "Year to date";
  YTD = "YTD";
  theme = "Theme";
  light = "Light";
  dark = "Dark";
  and = "And";
  kpi = "Key performance indicators";
  aov = "Average order value";
  conversionRate = "Conversion rate";
  inventoryTurnover = "Inventory turnover";
  days = "Days";
  average = "Average";
  total = "Total";
  avg = "Avg.";
  inventoryTurnoverExplanation = "Describes on average how long each product is in stock before being shipped to a customer. The lower the number, the better.";
  aovExplanation = "The average order value is the average amount of money each customer spends per order. The higher the number, the better.";
  conversionRateExplanation = "The conversion rate is the percentage of visitors who make a purchase. The higher the number, the better.";
  bestSellingProducts = "Best selling products";
  worstSellingProducts = "Worst selling products";
  inventoryValueExplanation = "The inventory value is the total value of all products in stock.";
  startSniper = "Start Sniper";
  show = "Show";
  newSniperResults = "New sniper results";
  sniperStarted = "Sniper started";
  clearAll = "Clear all";
  noNotifications = "No notifications";
  selectLanguage = "Select language";
  updateSubcategory = "Update Subcategory";
  chooseCategory = "Choose category";
  showing = "Showing";
  back = "back";
  country = "Country";
  state = "State";
  shippingAddress = "Shipping address";
  paymentDetails = "Payment details";
  reviewOrder = "Review order";
  thankYouForYourOrder = "Thank you for your order";
  firstNameShouldOnlyBeCharacters = "First name should only be characters";
  lastNameShouldOnlyBeCharacters = "Last name should only be characters";
  addressCannotBeEmpty = "Address can not be empty";
  cityCannotBeEmpty = "City can not be empty";
  emailNotCorrect = "Email must be in the format example@example.com";
  phoneNotCorrect = "Phone can only contain numbers";
  postcodeErrorMessage = "Postcode can only contain numbers";
  countryErrorMessage = "Country can only contain letters";
  next = "Next";
  placeOrder = "Place order";
  noItemsInBasket = "No items in basket!";
  shipping = "Shipping";
  orderSummary = "Order summary";
  method = "Method";
  thankYou = "Thank you";
  yourOrder = "Your order";
  hasBeenPlaced = "has been placed";
  confirmationEmailHasBeenSentTo = "Confirmation email has been sent to";
  billingDetails = "Billing details";
  shippingMethod = "Shipping Method";
  orderList = "Order list";
  shippingAndHandling = "Shipping and handling";
  vat25 = "VAT (Value Added Tax) 25%";
  estimatedDeliveryTime ="Expected delivery time is 4-5 days";
  selectDelivery = "Select delivery method";
  delivery = "Delivery";
  selectPaymentMethod ="Select payment method";
  status = "Status";
  noResults = "No results";

  // Months
  january = "January";
  february = "February";
  march = "March";
  april = "April";
  may = "May";
  june = "June";
  july = "July";
  august = "August";
  september = "September";
  october = "October";
  november = "November";
  december = "December";
  jan = "Jan";
  feb = "Feb";
  mar = "Mar";
  apr = "Apr";
  jun = "Jun";
  jul = "Jul";
  aug = "Aug";
  sep = "Sep";
  oct = "Oct";
  nov = "Nov";
  dec = "Dec";

  //Basket Page
  yourBasket = "Your basket";
  yourTotal = "Price";
  deliveryOptions = "Delivery Options:";
  paymentOptions = "Payment Options";
  subTotal = "Subtotal:";
  procesFee = "Handling fees:";
  totalIncMoms = "Price in total (including taxs):";
  checkOutText = "Checkout";
  addDiscountCode = "Add discount code";
  discountCodeOptional = "Discount code (optional)";
  addButton = "Add";

  // AboutUS page
  company_description1 = "Our physical store is located at Gammel Kongevej 94a, 1850 Frederiksberg.";
  company_description2 = "We buy and sell gold & silver, Danish porcelain and ceramics, as well as other exciting antiques.";
  opening_days = "Opening Hours";
  monday_text = "Monday";
  tuesday_text = "Tuesday";
  wednesday_text = "Wednesday";
  thursday_text = "Thursday";
  friday_text = "Friday";
  saturday_text = "Saturday";
  public_holiday_text = "Public Holidays";
  sunday_text = "Sunday";
  closed_text = "Closed";
  per_agreement_text = "By appointment only";
  contact_information = "Contact Information";
  phone_text = "Phone";
  email_text = "Email";
  address_text = "Address";
  post_code = "Post Code";
  cvr_nr_text = "CVR Number";
  faq_text = "Frequently Asked Questions:";
  q1_text = "What is your return policy?";
  q1_answer = "It is not possible to return goods after 24 hours.";
  q2_text = "Is it possible to have items delivered internationally?";
  q2_answer = "By appointment, we can arrange for goods to be delivered internationally, subject to the price of the item and the distance to the destination.";
  q3_text = "Can I collect my items from the store?";
  q3_answer = "It is always possible to collect items from the store during opening hours.";

  // Front page
  seeProductBtn = "See product";
  chosenCategories = "Chosen Categories";

  //Pop-up : cart
  shopButton = "Go to cart";

  // Category Admin
  createCategoryDialogTitle = "Create Category";
  createCategoryTitle = "Title";
  createCategoryOrder = "Order";
  createCategoryImgUrl = "Image Url";
  createCategoryDescription = "Description";
  createCategorySubmit = "Submit";
  createCategorySuccessMessage = "Created category successfully!";
  createCategoryFailedMessage = "Failed creating category!";
  updateCategorySuccessMessage = "Category updated!";
  updateCategoryFailedMessage = "Failed to edit category!";
  ProductCommaSeperatedText = "Add more products by comma seperating them like: Cup, Plate, Vase";
  // Update Form
  updateCategoryDialogTitle = "Update Category";
  updateCategoryFormTitle = "Title";
  updateCategoryFormOrder = "Order";
  updateCategoryFormDescription = "Description";
  updateCategoryFormImgURL = "Image URL";
  updateCategoryFormOrderDesc = "Sets the order in which categories will be displayed on the website";
  updateCategoryFormDescriptionDesc = "Describes details about the products in this category";
  updateCategorySubmit = "Update";
  deleteCategorySuccessMessage = "Category deleted successfully!";
  deleteCategoryFailedMessage = "Failed to delete category!";

  // SubCategory
  createSubCategoryCategoryTitle = "Select Category";
  createSubCategoryDialogTitle = "Create Subcategory";
  createSubcategoryCategoryTitle = "Choose subcategory";
  createSubCategoryTitle = "Title";
  createSubCategoryOrder = "Order";
  createSubCategoryImgUrl = "Image Url";
  createSubCategoryDescription = "Description";
  createSubCategorySubmit = "Create";
  createSubCategoryUpdate = "Update";
  createSubCategorySuccessMessage = "SubCategory created";
  createSubCategoryFailedMessage = "Error. Could not create SubCategory";
  createSubCategorySelectCategoryTitle = "Choose category";
  createSubCategorySelectCategoryFailedMessage = "You have to choose a category to create a SubCategory";
  createSubCategoryMissingFieldsMessage = "The following fields are required:";
  noSubCategoriesToShow = "There are currently no subcategories on this page";
  createSubCategoryUpdateSuccessMessage = "Successfully updated subcategory";
  createSubCategoryUpdateFailedMessage = "Error. Could not update subcategory";

  // alerts: 
  alertNoProuductsInCat = "There is currently no products in this category, try again later"
  alreadyInBasket = "Item is already in the basket"; 
  nothingInBasket = "No items in basket!"

  // Analysis
  AnalysisTitle = "Gold and Silver";
  AnalysisMaterial = "Material";
  AnalysisItems = "Items in Stock";
  AnalysisWeight = "Weight";
  AnalysisPricePrKg = "Price pr. Kg";
  AnalysisSummary = "Price summary";
  AnalysisSilver = "Silver";
  AnalysisGold = "Gold";



  // Admin Header 
  GeneralHeaderAdmin = "General";


  // Admin Tabs 
  AnalyticsTabText = "Analytics";
  SalesTabText = "Sales";
  InventoryTabText = "Inventory";
  ProductSniperTabText = "Productsniper";
  ManagementTabText = "Management";
  OrdersTabText = "Orders";
  LogoutTabText = "Log out";

  // Admin Dashboard
  EconomyWidgetSalesFormat = "Sales ($)";
  EconomyWidgetTitle = "Revenue / Expenses";
  RecentSalesDatePaid = "Date";
  RecentSalesApproved = "Payment Approved";
  RecentSalesMethod = "Payment Method";
  RecentSalesAmount = "Sale Amount";
  RecentSalesNavButton = "See more orders";
  RecentSalesWidgetTitle = "Recent Sales";
  RecentSalesCurrencyId = "$";

  // Header tabs
  HomeTabText = "Home";
  ProductTabText = "Products";
  CategoriesTabText = "Categories";
  SubCategoriesTabText = "Subcategories";
  BasketTabText = "Basket";
  PaymentTabText = "Payment";
  ConfirmationTabText = "Confirmation";
  BackOfficeTabText = "Dashboard";
  SearchBarText = "Search";
  CatalogTabText = "Catalog";

  // Payments
  goToSales = "See more sales";
  SalesSummaryTitle = "Sales Summary";
  SalesSummaryTotalSales = "Sales (total)";
  SalesSummaryTotalAmount = "Amount (total)";

  ShoppingCartWidgetPaymentFeeLabel = "Payment fee(s)";
  ShoppingCartWidgetTotalLabel = "Total w/o discount";
  ShoppingCartWidgetTotalAmountLabel = "Total incl. tax";

  CheckoutFormTitle = "Checkout";
  CheckoutFormFirstNameLabel = "Firstname";
  CheckoutFormLastNameLabel = "Lastname";
  CheckoutFormEmailLabel = "Email";
  CheckoutFormAddressLabel = "Address";
  CheckoutFormZipCodeLabel = "Zipcode";
  CheckoutFormCityLabel = "City";
  CheckoutFormCountryLabel = "Country";
  CheckoutFormCountryCodeLabel = "Countrycode";
  CheckoutFormPhoneLabel = "Phonenumber";
  CheckoutFormDeliveryLabel = "Delivery method";
  CheckoutFormDeliveryOptionCollectLabel = "Collect at store";
  CheckoutFormDeliveryOptionSendLabel = "Ship to Billing Address";
  CheckoutFormSubmitButton = "Continue to payment";
  cardNumber = "Card number";

  CheckoutPaymentWidgetPayButtonText = "Pay";
  CheckoutPaymentWidgetPayFormMPLabel = "Phone number";
  CheckoutPaymentWidgetPayFormCardLabel = "Choose card type";
  CheckoutPaymentWidgetPayFormMMYYLabel = "MM/YY";
  CheckoutPaymentWidgetPayFormCardHolderLabel = "Cardholders name";
  CheckoutPaymentWidgetPayFormSecureLabel = "CVC";

  // Orders
  goToOrders = "See more Orders";
  OrderDetailsProductName = "Product(s)";
  OrderDetailsManufacturer = "Fabricator";
  OrderDetailsCustomerId = "Customer (Id)";
  OrderDetailsPaymentStatus = "Payment Status";
  OrderDetailsDeliveryStatus = "Delivery Status";
  OrderDetailsDiscountTag = "Discount used";
  OrderDetailsCompletionStatus = "Completed?";
  OrderDetailsListTitle = "Order Summary";

  // Footer tabs
  BlogTabText = "Blog";
  OldPageText = "Old webpage";
  AboutUsTabText = "About us";
  FAQTabText = "FAQ";
  ContactTabText = "Contact";



  // Sniper
  TableEntrySniperSource = "Source";
  TableEntrySniperVN = "Lot Id";
  TableEntrySniperTitle = "Title";
  TableEntrySniperBuyNowPrice = "Price";
  TableEntrySniperNextBid = "Next Bid";
  TableEntrySniperPriceEst = "Estimation";
  TableEntrySniperDescription = "Description";
  TableEntrySniperImages = "Image(s)";
  TableEntrySniperItemUrl = "URL";
  SniperFormMutedText = "Currently we will look for data on Lauritz.com and dba.dk";
  SniperFormButtonText = "Search";
  SniperFormLabelText = "Enter Search Value";
  SniperFormTitleText = "Price Sniper";

  // Inventory
  InventoryAmountLabel = "Total Products: ";
  InventoryWidgetTitle = "Inventory";
  InventoryTitle = "Title";


}