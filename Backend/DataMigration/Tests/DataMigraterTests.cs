﻿using ClassLibrary.Models;
using DataMigration.Helpers;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace DataMigration.Tests
{

    [TestClass]
    public class DataMigraterTests
    {
        [TestMethod]
        public void TestProductNameExtraction()
        {
            // Arrange
            DataExtractor de = new();
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            int productNameMatchCounter = 0;
            int dataItemsCount = data.Count;

            // Act
            for (int i = 0; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var (name, modelNumber) = RegexHelper.RecognizeModelnumberPattern(dataItem[2]);
                if (string.IsNullOrEmpty(name))
                {
                    failedMatches.Add(dataItem[2]);
                    continue;
                }
                else productNameMatchCounter++;
            }

            // Show failed attempts
            foreach (var mat in failedMatches)
            {
                Console.WriteLine(mat);
            }

            // Assert
            Assert.AreEqual(dataItemsCount, productNameMatchCounter);
        }
        [TestMethod]
        public void TestProductModelnumberExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            int productModelnumberMatchCounter = 0;
            int dataItemsCount = data.Count;

            // Act
            for (int i = 0; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var (name, modelNumber) = RegexHelper.RecognizeModelnumberPattern(dataItem[2]);
                if (modelNumber == null)
                {
                    failedMatches.Add(dataItem[2]);
                    continue;
                }
                else productModelnumberMatchCounter++;
            }

            // Show failed attempts
            foreach (var mat in failedMatches)
            {
                Console.WriteLine(mat);
            }

            // Assert
            Assert.AreEqual(dataItemsCount, productModelnumberMatchCounter);
        }
        [TestMethod]
        public void TestProductManufacturerExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            int productManufacturerMatchCounter = 0;
            int dataItemsCount = data.Count;

            // Act
            for (int i = 0; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var manufacturer = DataExtractor.ExtractManufacturer(dataItem[3]);
                if (string.IsNullOrEmpty(manufacturer))
                {
                    failedMatches.Add(dataItem[3]);
                    continue;
                }
                else productManufacturerMatchCounter++;
            }

            // Show failed attempts
            foreach (var mat in failedMatches)
            {
                Console.WriteLine(mat);
            }

            // Assert
            Assert.AreEqual(dataItemsCount, productManufacturerMatchCounter);
        }
        [TestMethod]
        public void TestProductMaterialExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            int productMaterialMatchCounter = 0;

            // Act
            for (int i = 0; i < data.Count; i++)
            {
                var dataItem = data[i];
                var material = DataExtractor.ExtractMaterialType(dataItem[3]);
                if (material == MaterialType.undefined)
                {
                    failedMatches.Add(dataItem[3]);
                    continue;
                }
                else productMaterialMatchCounter++;
            }

            // Show failed attempts
            foreach (var mat in failedMatches)
            {
                Console.WriteLine(mat + "\n");
            }

            // Assert
            int dataItemsCount = data.Count;
            Assert.AreEqual(dataItemsCount, productMaterialMatchCounter);
        }
        [TestMethod]
        public void TestProductDesignExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            int productDesignMatchCounter = 0;
            int dataItemsCount = data.Count;


            // Act
            for (int i = 0; i < dataItemsCount - 1; i++)
            {
                var dataItem = data[i];
                var design = DataExtractor.ExtractDesign(dataItem[3]);
                if (string.IsNullOrEmpty(design))
                {
                    failedMatches.Add(dataItem[3]);
                    continue;
                }
                else productDesignMatchCounter++;
            }

            // Show failed attempts
            foreach (var mat in failedMatches)
            {
                Console.WriteLine(mat + "\n");
            }

            // Assert
            Assert.AreEqual(dataItemsCount, productDesignMatchCounter);
        }
        [TestMethod]
        public void TestProductDimensionExtraction()
        {
            // Arrange

            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            int productDimensionMatchCounter = 0;
            int dataItemsCount = data.Count;


            // Act
            for (int i = 0; i < dataItemsCount - 1; i++)
            {
                var dataItem = data[i];
                var dimension = DataExtractor.ExtractDimension(dataItem[3]);

                if (string.IsNullOrEmpty(dimension))
                {
                    failedMatches.Add(dataItem[3]);
                    continue;
                }
                else productDimensionMatchCounter++;
            }

            // Show failed attempts
            foreach (var mat in failedMatches)
            {
                Console.WriteLine(mat + "\n");
            }

            // Assert
            Assert.AreEqual(dataItemsCount, productDimensionMatchCounter);
        }
        [TestMethod]
        public void TestProductCategoryExtraction()
        {
            // Arrange;
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            List<Category> categories = DataRepository.Categories();
            int productCategoryMatchCounter = 0;
            int dataItemsCount = data.Count;

            int figurer = 0;
            int stel = 0;
            int stelDele = 0;
            int glas = 0;
            int guldOgSoelv = 0;
            int keramik = 0;
            int bestik = 0;
            int platter = 0;
            int nullCounter = 0;


            // Act
            for (int i = 0; i < dataItemsCount - 1; i++)
            {
                var dataItem = data[i];
                string dataInput = dataItem[2] + dataItem[3] + dataItem[5];
                var productCategory = CategoryHelper.InferCategory(categories, dataInput);
                if (productCategory == null)
                {
                    nullCounter++;
                    failedMatches.Add(dataInput);
                    continue;
                }
                else
                {
                    productCategoryMatchCounter++;
                    if (productCategory.Name == "Stel|Dinnerware") stel++;
                    if (productCategory.Name == "Steldele|Dinnerware parts") stelDele++;
                    if (productCategory.Name == "Figurer|Figurines") figurer++;
                    if (productCategory.Name == "Keramik|Ceramics") keramik++;
                    if (productCategory.Name == "Guld & Sølv|Gold & Silver") guldOgSoelv++;
                    if (productCategory.Name == "Bestik|Cutlery") bestik++;
                    if (productCategory.Name == "Platter|Plaques") platter++;
                    if (productCategory.Name == "Glas|Glass") glas++;

                }
            }

            //Show failed attempts
            foreach (var mat in failedMatches)
            {
                Console.WriteLine(mat + "\n");
            }

            Console.WriteLine("Stel|Dinnerware: " + stel);
            Console.WriteLine("Steldele|Dinnerware parts: " + stelDele);
            Console.WriteLine("Figurer|Figurines: " + figurer);
            Console.WriteLine("Keramik|Ceramics: " + keramik);
            Console.WriteLine("Guld & Sølv|Gold & Silver: " + guldOgSoelv);
            Console.WriteLine("Bestik|Cutlery: " + bestik);
            Console.WriteLine("Platter|Plaques: " + platter);
            Console.WriteLine("Glas|Glass: " + glas);
            Console.WriteLine("Category returned null: " + nullCounter);

            // Assert
            Assert.AreEqual(dataItemsCount, productCategoryMatchCounter);
        }
        [TestMethod]
        public void TestProductSubcategoriesExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            List<string> subcategoryNames = new();
            List<Category> categories = DataRepository.Categories();
            List<Subcategory> subcategories = DataRepository.Subcategories();
            int productSubcategoriesMatchCounter = 0;
            int categoryFailCounter = 0;
            int dataItemsCount = data.Count - 1;


            // Act
            for (int i = 1; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                string dataInput = dataItem[2] + dataItem[3] + dataItem[5];
                var productCategory = CategoryHelper.InferCategory(categories, dataInput);
                if (productCategory == null)
                {
                    categoryFailCounter++;
                    failedMatches.Add(dataInput);
                    continue;
                }
                else
                {
                    var productSubcategories = CategoryHelper.ExtractSubcategories(productCategory, subcategories, dataInput);

                    if (productSubcategories.Count == 0)
                    {
                        failedMatches.Add(dataItem[3]);
                        continue;
                    }
                    else
                    {
                        foreach (var subcategory in productSubcategories)
                        {
                            subcategoryNames.Add(subcategory.Name);

                        }
                        productSubcategoriesMatchCounter++;
                    }
                }
            }

            //Show failed attempts
            //foreach (var mat in failedMatches)
            //{
            //    Console.WriteLine(mat + "\n");
            //}

            foreach (var subcategory in subcategories)
            {
                int x = 0;
                foreach (var subcategoryName in subcategoryNames)
                {
                    if (subcategoryName == subcategory.Name)
                    {
                        x += 1;
                    }
                }
                Console.WriteLine("Subcategory " + subcategory.Name + " has " + x + " items");
            }

            // Assert
            Console.WriteLine("Failed matches: " + categoryFailCounter);
            Assert.AreEqual(dataItemsCount, productSubcategoriesMatchCounter);
        }
        [TestMethod]
        public void TestProductPriceExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<decimal> prices = new();
            int productPricesMatchCounter = 0;
            int dataItemsCount = data.Count - 1;


            // Act
            for (int i = 1; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var price = DataExtractor.ExtractPrice(dataItem[3]);
                if (price != (decimal)149.1)
                {
                    prices.Add(price);
                    productPricesMatchCounter++;
                }
            }


            // Assert
            Assert.AreEqual(dataItemsCount, productPricesMatchCounter);
        }
        [TestMethod]
        public void TestProductQualityExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<QualityType> qualities = new();
            int productQualityMatchCounter = 0;
            int dataItemsCount = data.Count - 1;


            // Act
            for (int i = 1; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var quality = DataExtractor.ExtractQuality(dataItem[3]);
                if (quality != QualityType.Undefined)
                {
                    qualities.Add(quality);
                    productQualityMatchCounter++;
                }
            }

            Console.WriteLine("Matched Quality for {0}/{1}", productQualityMatchCounter, dataItemsCount);


            // Assert
            Assert.AreEqual(dataItemsCount, productQualityMatchCounter);
        }
        [TestMethod]
        public void TestProductConditionExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<ConditionType> conditions = new();
            List<string> failedMatches = new();
            int productConditionMatchCounter = 0;
            int dataItemsCount = data.Count - 1;


            // Act
            for (int i = 1; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var condition = DataExtractor.ExtractCondition(dataItem[3]);
                if (condition == ConditionType.Undefined)
                {
                    failedMatches.Add(dataItem[3]);
                    continue;
                }
                conditions.Add(condition);
                productConditionMatchCounter++;
            }

            foreach (string fail in failedMatches)
            {
                Console.WriteLine(fail);
            }

            Console.WriteLine("Matched Condition for {0}/{1}", productConditionMatchCounter, dataItemsCount);

            // Assert
            Assert.AreEqual(dataItemsCount, productConditionMatchCounter);
        }
        [TestMethod]
        public void TestProductSoldExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            List<string> failedMatches = new();
            int productSoldMatchCounter = 0;
            int productsSold = 0;
            int dataItemsCount = data.Count - 1;


            // Act
            for (int i = 1; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var itemSold = DataExtractor.ExtractSold(dataItem[10]);
                if (itemSold == null)
                {
                    failedMatches.Add(dataItem[10]);
                    continue;
                }
                if (itemSold == true)
                {
                    productsSold++;
                }
                productSoldMatchCounter++;
            }

            foreach (string fail in failedMatches)
            {
                Console.WriteLine(fail);
            }

            Console.WriteLine("Matched Sold for {0}/{1}", productSoldMatchCounter, dataItemsCount);
            Console.WriteLine("Products sold: " + productsSold);

            // Assert
            Assert.AreEqual(dataItemsCount, productSoldMatchCounter);
        }
        [TestMethod]
        public void TestProductItemCountExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            int productItemCountMatchCounter = 0;
            int moreThanOne = 0;
            int dataItemsCount = data.Count - 1;


            // Act
            for (int i = 1; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var productItemCount = DataExtractor.ExtractProductItemCount(dataItem[13]);
                if (productItemCount > 1)
                {
                    moreThanOne++;
                }
                else if (productItemCount == 1)
                {
                    productItemCountMatchCounter++;
                }
            }

            // Assert
            Console.WriteLine("{0} products have more than one productItem", moreThanOne);
            Assert.AreEqual(dataItemsCount, productItemCountMatchCounter);
        }
        [TestMethod]
        public void TestProductWeightExtraction()
        {
            // Arrange
            List<string[]> data = DataExtractor.GetCsvEntries();
            int productWeightMatchCounter = 0;
            int dataItemsCount = data.Count - 1;

            // Act
            for (int i = 1; i < dataItemsCount; i++)
            {
                var dataItem = data[i];
                var weight = DataExtractor.ExtractWeight(dataItem[14]);
                if (weight != null)
                {
                    productWeightMatchCounter++;

                }
            }

            // Assert
            Assert.AreEqual(dataItemsCount, productWeightMatchCounter);
        }
        [TestMethod]
        public void FindCategoriesFromOldWebsite()
        {
            List<string[]> data = DataExtractor.GetCsvEntries();
            int dataItemsCount = data.Count;
            List<string> categories = new();

            for (int i = 0; i < dataItemsCount - 1; i++)
            {
                var dataItem = data[i];
                string[] dataItemCategories = dataItem[5].Split(';');
                if (dataItemCategories != null && dataItemCategories.Length > 0)
                {
                    foreach (string cat in dataItemCategories)
                    {
                        if (!categories.Contains(cat))
                        {
                            categories.Add(cat);
                        }
                    }
                }
            }
            foreach (string cat in categories)
            {
                Console.WriteLine(cat);
            }
        }
        [TestMethod]
        public void TestProductAndProductItemGeneration()
        {
            DataExtractor dataExtractor = new();
            var (Products, ProductItems, Images) = dataExtractor.ExtractData();
            Console.WriteLine("Products: {0}", Products.Count);
            Console.WriteLine("ProductItems: {0}", ProductItems.Count);
            Console.WriteLine("Images: {0}", Images.Count);
            Assert.IsTrue(Products.Count < ProductItems.Count);
        }
        [TestMethod]
        public void TestOrderPaymentOrderElementsGeneration()
        {
            List<DiscountCode> discountCodes = DataRepository.DiscountCodes();
            List<ProductItem> productItems = DataRepository.ProductItems();
            var (Orders, Payments, OrderElements) = DataExtractor.GenerateOrders(productItems);

            double orderAmount = 0;

            foreach (var order in Orders)
            {
                List<OrderElements> orderElements = OrderElements.FindAll(oe => oe.OrderId == order.Id);
                double paymentAmount = 0.0;
                foreach (var orderElement in orderElements)
                {
                    var additionPrice = 0.0                        ;
                    if (orderElement.ProductItem != null)
                    {
                        additionPrice = (double)orderElement.ProductItem.CurrentPrice;
                    }
                    paymentAmount += additionPrice;
                }
                var discountCode = discountCodes.Find(d => d.Code == order.DiscountCode)!;
                paymentAmount *= (100 - discountCode.DiscountPercentage);

                Payment? orderPayment = Payments.FirstOrDefault(p => p.Id == order.PaymentId);
                if (orderPayment != null)
                {
                    if (orderPayment.Amount <= 0.0 || orderPayment.Amount != paymentAmount)
                    {
                        Console.WriteLine("Inconsistency between orderPayment.Amount and the sum of productItems prices");
                        continue;
                    }
                    orderAmount += 1;
                }
            }
            Assert.AreEqual(Orders.Count, orderAmount);
        }
    }
}

