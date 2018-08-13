import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time

Client = discord.Client()
client = commands.Bot(command_prefix = "/")

@client.event
async def on_ready():
    print("Bot is ready and connected to Discord")
  

@client.event
async def on_message(message):
    if message.content.upper() == ("HELP"):
        await client.send_message(message.channel, "If you want to look up an item on the menu, type /menu 'name of menu item' example: \n'/m chicken parmesan'")
     
    elif message.content.upper().startswith("/MENU"):    
        #Salad Section
        
        #Salmon Salad 
        if message.content.upper() == ("/MENU SALMON SALAD"):
            await client.send_message(message.channel, "_**Salmon Salad**_\t\t$19 CAD\nMixed greens tossed in our homemade balsamic vinagrette topped with a grilled salmon fillet")
            
        #Chicken Salad
        elif message.content.upper() == ("/MENU CHICKEN SALAD"):
            await client.send_message(message.channel, "_**Chicken Salad**_\t\t$17\nMixed greens tossed in our homemade Italian dressing topped with a grilled chicken breast")        
        
        #Sun-dried Tomato Salad (CHECK LATER!)
        elif message.content.upper() == ("/MENU SUN-DRIED TOMATO") or message.content.upper() == ("/MENU SUN-DRIED TOMATO SALAD"):
            await client.send_message(message.channel, "_**Sun-dried Tomato**_\t\t$14\nMixed greens tossed in our homemade balsamic vinaigrette and Feta Cheese")
        
        #Chicken Caesar Salad
        elif message.content.upper() == ("/MENU CHICKEN CAESAR SALAD"):
            await client.send_message(message.channel, "_**Chicken Caesar Calad**_\t\t$17 CAD\nRomaine Lettuce tossed in our homemade Caesar dressing topped with a grilled chicken breast")
        
        #May add Homemade Salad dressing to menu later
        
        #Seafood Section
        
        #Poached Salmon
        elif message.content.upper() == ("/MENU POACHED SALMON"):
            await client.send_message(message.channel, "_**Poached Salmon**_\t\t$21 CAD\nPoached salmon fillet served with our homemade yogurt dill sauce. Served with roasted potatoes and vegetables")
        
        #Shrimp Marinara
        elif message.content.upper() == ("/MENU SHRIMP MARINARA"):
            await client.send_message(message.channel, " _**Shrimp Marinara**_\t\t$21 CAD\nBlack tiger shrimp sauteed in a white wine,garlic,tomato sauce. Served with Penne Pasta & vegetables. ")
        
        #Grilled Salmon
        elif message.content.upper() == ("/MENU GRILLED SALMON"):
            await client.send_message(message.channel, " _**Grilled Salmon**_\t\t$21 CAD\nGrilled salmon fillet topped with basil & olive oil. Served with roasted potatoes & vegetables")
        
        #Grilled Blackened Salmon    
        elif message.content.upper() == ("/MENU GRILLED BLACKENED SALMON"):
            await client.send_message(message.channel, "_**Grilled Blackened Salmon**_\t\t$21 CAD\nBlackened Cajun spiced salmon fillet served with roasted potatoes & vegetables")
        
        #Fillet of Sole
        elif message.content.upper() == ("/MENU FILLET OF SOLE"):
            await client.send_message(message.channel, "_**Fillet of Sole**_\t\t$20 CAD\nPan-seared Sole fillet topped with sun-dried tomatoes in a white wine garlic sauce.  Served with Penne pasta & vegetables")
        
        #Honey Garlic Salmon
        elif message.content.upper() == ("/MENU HONEY GARLIC SALMON"):
            await client.send_message(message.channel, "_**Honey Garlic Salmon**_\t\t$21 CAD\nPan-seared salmon fillet topped with honey garlic cause. Served with roasted potatoes and vegetables")
        
        #Chicken Section
        
        #Grilled Chicken
        elif message.content.upper() == ("/MENU GRILLED CHICKEN"):
            await client.send_message(message.channel, "_**Grilled Chicken**_\t$20 CAD\nGrilled chicken breast topped with basil and olive oil.  Served with roasted potatoes & vegetables")
        
        #Lemon Chicken
        elif message.content.upper() == ("/MENU LEMON CHICKEN"):
            await client.send_message(message.channel, "_**Lemon Chicken**_\t\t$20 CAD\nPan-seared chicken breast topped with lemon sauce. Served with Penne pasta & vegetables")
        
        
        #Chicken Cacciatore
        elif message.content.upper() == ("/MENU CHICKEN CACCIATORE"):
            await client.send_message(message.channel, "_**Chicken Cacciatore**_\t\t$20 CAD\nPan-seared filletes of chicken topped with mushrooms, roasted red peppers & Kalamata olives in a red wine tomato sauce. Served with Penne pasta & vegetables.")
        
        #Lemon Dijon Chicken
        elif message.content.upper() == ("/MENU LEMON DIJON CHICKEN"):
            await client.send_message(message.channel, "_**Lemon Dijon Chicken**_\t\t$20 CAD\nPan-seared chicken breast topped with a lemon Dijon mustard sauce. Served with Penne pasta & vegetables")
        
        #Chicken Parmesan
        elif message.content.upper() == ("/MENU CHICKEN PARMESAN") or message.content.upper() == ("/MENU CHICKEN PARMIGIANO"):
            await client.send_message(message.channel, "_**Chicken Parmigiano**_\t\t$20 CAD \nBreaded chicken cutlet topped with tomato sauce, Mozzarella & Parmesan cheese. Served with Penne pasta & vegetables \n :drooling_face:")
        
        #Rosemary Duck
        elif message.content.upper() == ("/MENU ROSEMARY DUCK"):
            await client.send_message(message.channel, "_**Rosemary Duck**_\t\t$23 CAD\nOven-roasted duck marinated in a Rosemary red wine sauce. Served with roasted potatoes and vegetables")
        
        #Veal Section
        elif message.content.upper() == ("/MENU LEMON VEAL"):
            await client.send_message(message.channel, "_**Lemon Veal**_\t\t$23 CAD\nPan-seared veal topped with lemon sauce. Served with Penne pasta & vegetables")
        
        #Veal Scallopini 
        elif message.content.upper() == ("/MENU VEAL SCALLOPINI"):
            await client.send_message(message.channel, "_**Veal Scallopini**_\t\t$23 CAD\nBreaded veal cutlet topped with mushrooms roasted red peppers & Provolone cheese in a red wine tomato sauce. Served with roasted potatoes & vegetables")
        
        #Veal Parmesan
        elif message.content.upper() == ("/MENU VEAL PARMESAN") or message.content.upper() == ("/MENU VEAL PARMIGIANO"):
            await client.send_message(message.channel, "_**Veal Parmigiano**_\t\t$23 CAD\nBreaded veal cutlet topped with tomato sauce.  Mozzerella & Parmesan cheese.  Served with Penne Pasta & vegetables")
        
        #Veal Mushroom
        elif message.content.upper() == ("/MENU VEAL MUSHROOM"):
            await client.send_message(message.channel, "_**Veal Mushroom**_\t\t$23 CAD\nPan-seared veal topped with a mushroom cream sauce. Served with Penne pasta & vegetables.")
        
        #Vegetarian Section
        
        #Eggplant Parmigiano
        elif message.content.upper() == ("/MENU EGGPLANT PARMIGIANO") or message.content.upper() == ("/MENU EGGPLANT PARMESAN"):
            await client.send_message(message.channel, "_**Eggplant Parmigiano**_\t\t$17 CAD\nBreaded eggplant topped with tomato sauce, Mozzerella & Parmesan cheese. Served with Penne Pasta & Vegetables")
        
        #Eggplant Bocconcini
        elif message.content.upper() == ("/MENU EGGPLANT BOCCONCINI"):
            await client.send_message(message.channel, "_**Eggplant Bocconcini**_\t\t$17 CAD\n Grilled eggplant stuffed with Bocconcini cheese & topped with tomato sauce. Served with Penne pasta & vegetables")
        
        #Vegetarian Pasta Section
        
        #Mediterranean Pasta 
        elif message.content.upper() == ("/MENU MEDITERRANEAN PASTA"):
            await client.send_message(message.channel, "_**Mediterranean Pasta**_\t\t$16 CAD\nEggplant,zucchini,spinach,roasted red pepppers,Kalamata olives,Feta cheese, Penne Pasta, tomato sauce")
        
        #Fettuccine Alfredo
        elif message.content.upper() == ("/MENU FETTUCCINE ALFREDO"):
            await client.send_message(message.channel, "_**Fettuccine Alfredo**_\t\t$15 CAD\nSauteed mushrooms, Fettuccine pasta, cream sauce")
        
        #Penne Vodka
        elif message.content.upper() == ("/MENU PENNE VODKA"):
            await client.send_message(message.channel, "_**Penne Vodka**_\t\t$15 CAD\nSauteed mushrooms, Penne pasta, Vodka Rose sauce")
            
        #Linguine Al Pesto
        elif message.content.upper() == ("/MENU LINGUINE AL PESTO"):
            await client.send_message(message.channel, "_**Linguine Al Pesto**_\t\t$14 CAD\nPine Nuts, Parmesan cheese, Linguine pasta, pesto sauce")
            
        #Manicotti
        elif message.content.upper() == ("/MENU MANICOTTI"):
            await client.send_message(message.channel, "_**Manicotti**_\t\t$16 CAD\nFresh Pasta stuffed with Ricotta cheese, spinach, tomato sauce")
        
        #Penne Arrabiata
        elif message.content.upper() == ("/MENU PENNE ARRABIATA"):
            await client.send_message(message.channel, "_**Penne Arrabiata**_\t\t$12 CAD\nPenne Pasta, spicy tomato sauce")
            
        #Spaghetti Pomodoro
        elif message.content.upper() == ("/MENU SPAGHETTI POMODORO"):
            await client.send_message(message.channel, "_**Spaghetti Pomodoro**_\t\t$12 CAD\nSpaghetti pasta, tomato sauce")
        
        #Vegetarian Lasagna
        elif message.content.upper() == ("/MENU VEGETARIAN LASAGNA"):
            await client.send_message(message.channel, "_**Vegetarian Lasagna**_\t\t$17 CAD\nLayers of fresh pasta,meatless Ground Round, Ricotta cheese & Mozzarella cheese, tomato sauce")
            
        #Pasta with Chicken Section
        
        #Chicken Arrabiata
        elif message.content.upper() == ("/MENU CHICKEN ARRABIATA"):
            await client.send_message(message.channel, "_**Chicken Arriabiata**_\t\t$16 CAD\nChicken breast, Cauliflower,Penne pasta,spicy tomato sauce")
        
        #Raffaella
        elif message.content.upper() == ("/MENU RAFFAELLA"):
            await client.send_message(message.channel, "_**Raffaella**_\t\t$16 CAD\nChicken Breast, roasted red peppers, sun-dried tomatoes,snow peas,Penne pasta, Rose Sauce")
        
        #Chicken Carbonara
        elif message.content.upper() == ("/MENU CHICKEN CARBONARA"):
            await client.send_message(message.channel, "_**Chicken Carbonara**_\t\t$16 CAD\nChicken breast,bacon,Parmesan cheese,Spaghetti pasta, cream sauce")
        
        #Chicken Al Pesto
        elif message.content.upper() == ("/MENU CHICKEN AL PESTO"):
            await client.send_message(message.channel, "_**Chicken Al Pesto**_\t\t$16 CAD\nChicken breast, Pine nuts,Parmesan cheese,Linguine pasta,pesto sauce")
        
        #Chicken Mushroom
        elif message.content.upper() == ("/MENU CHICKEN MUSHROOM"):
            await client.send_message(message.channel, "_**Chicken Mushroom**_\t\t$16 CAD\nChicken breast,sauteed mushrooms,Bowtie pasta,cream sauce")
            
        #Chicken Penne 
        elif message.content.upper() == ("/MENU CHICKEN PENNE"):
            await client.send_message(message.channel, "_**Chicken Penne**_\t\t$16 CAD\nBreaded chicken,mushrooms,Penne pasta, pesto cream sauce")
        
        #Pasta with Meat section
        
        #Ham Alfredo
        elif message.content.upper() == ("/MENU HAM ALFREDO"):
            await client.send_message(message.channel, "_**Ham Alfredo**_\t\t$16 CAD\nSauteed mushrooms,smoked ham,Fettucine pasta,cream sauce")
        
        #Veal Aglio e Olio
        elif message.content.upper() == ("/MENU VEAL AGLIO E OLIO") or message.content.upper() == ("/MENU VEAL OLIO"):
            await client.send_message(message.channel, "_**Veal aglio e Olio**_\t\t$15 CAD\nChopped veal tenderloin, broccoli, roasted red peppers, Linguine pasta, oil & garlic")
        
        #Lasagna
        elif message.content.upper() == ("/MENU LASAGNA"):
            await client.send_message(message.channel, "_**Lasagna**_\t\t$17 CAD\nLayers of pasta, ground beef, Ricotta & Mozzarella cheese, tomato sauce\n We also have vegeterian lasagna ^_^")
        
        #Spaghetti & Meatballs (UNKNOWN ISSUE WITH THIS MENU ITEM)
        elif message.content.upper() == ("/MENU SPAGHETTI & MEATBALLS") or message.content.upper() == ("/MENU SPAGHETTI AND MEATBALLS"):
            await client.send_message(message.channel, "_**Spaghetti & Meatballs**_\t\t$17 CAD\nOven roasted meatballs, sauteed mushrooms, Spaghetti pasta, tomato sauce")
     
       
        #Spaghetti Bolognese
        elif message.content.upper() == ("/MENU SPAGHETTI BOLOGNESE"):
            await client.send_message(message.channel, "_**Spaghetti Bolognese**_\t\t$16 CAD\nSauteed mushrooms, Spaghetti pasta, meat sauce")
        
        #Penne Sausage
        elif message.content.upper() == ("/MENU PENNE SAUSAGE"):
            await client.send_message(message.channel, "_**Penne Sausage**_\t\t$15 CAD\nItalian sausage, red peppers, mushrooms, Penne, tomato sauce")
            
        #Pasta with Seafood Section
        
        #Shrimp Arrabiata
        elif message.content.upper() == ("/MENU SHRIMP ARRABIATA"):
            await client.send_message(message.channel, "_**Shrimp Arrabiata**_\t\t$18 CAD\nBlack tiger shrimp, Penne pasta, spicy tomato sauce")
        
        #Shrimp Al Pesto
        elif message.content.upper() == ("/MENU SHRIMP AL PESTO"):
            await client.send_message(message.channel, "_**Shrimp al Pesto**_\t\t$18 CAD\nBlack Tiger Shrimp, Pine nuts, Parmesan cheese, Linguine pasta, pesto sauce")
        
        #Seafood Creole
        elif message.content.upper() == ("/MENU SEAFOOD CREOLE"):
            await client.send_message(message.channel, "_**Seafood Creole**_\t\t$17 CAD\nShrimp, calamari, clams, salmon, mussels, Linguine pasta, Marinara sauce")
        
        #Shrimp & Scallops
        elif message.content.upper() == ("/MENU SHRIMP & SCALLOPS") or message.content.upper() == ("/MENU SHRIMP AND SCALLOPS"):
            await client.send_message(message.channel, "_**Shrimp & Scallops**_\t\t$22 CAD\nBlack tiger shrimp, fresh sea scallops, fresh tomatoes, Linguine pasta, tomato sauce")
        
        #Fettuccine Salmon
        elif message.content.upper() == ("/MENU FETTUCCINE SALMON"):
            await client.send_message(message.channel, "_**Fettuccine Salmon**_\t\t$16 CAD\nFresh and smoked salmon, Fettucine pasta, Rose sauce")
       
        #Linguine Clams
        elif message.content.upper() == ("/MENU LINGUINE CLAMS"):
            await client.send_message(message.channel, "_**Linguine Clams**_\t\t$16 CAD\nFresh & baby clams, Linguine pasta, tomato sauce")
        
        #Shrimp & Mussels
        elif message.content.upper() == ("/MENU SHRIMP & MUSSELS") or message.content.upper() == ("/MENU SHRIMP AND MUSSELS"):
            await client.send_message(message.channel, "_**Shrimp & Mussels**_\t\t$17 CAD\nBlack tiger shrimp, mussels, Bowtie pasta, Terragon cream sauce")
        
        #Shrimp Portabello
        elif message.content.upper() == ("/MENU SHRIMP PORTABELLO"):
            await client.send_message(message.channel, "_**Shrimp Portabello**_\t\t$18 CAD\nBlack tiger chrimp, snow peas, capers, Portobello mushrooms, Fettuccine pasta, Rose Sauce")
       
        #Gourmet Pizza Section
        
        #Basic Pizza
        elif message.content.upper() == ("/MENU BASIC PIZZA") or message.content.upper() == ("/MENU CHEESE PIZZA"):
            await client.send_message(message.channel, "_**Basic PIzza**_\t\t$11 CAD\nTomato sauce, basil & Mozzarella cheese")
        
        #Bruschetta Pizza
        elif message.content.upper() == ("/MENU BRUSCHETTA PIZZA"):
            await client.send_message(message.channel, "_**Bruschetta Pizza**_\t\t$14 CAD\nTomato sauce, basil, Mozzarella cheese & bruschetta mix")
        
        #Italian Sausage Pizza
        elif message.content.upper() == ("/MENU ITALIAN SAUSAGE PIZZA"):
            await client.send_message(message.channel, "_**Italian sausage Pizza**_\t\t$16 CAD\nTomato sauce, basil, Mozzarella cheese, tomatoes, bacon & Italian sausage")
        
        #Genovese Pizza
        elif message.content.upper() == ("/MENU GENOVESE PIZZA"):
            await client.send_message(message.channel, "_**Genovese Pizza**_\t\t$16 CAD\nTomato sauce, basil, Mozzarella cheese, grilled chicken, artichoke hearts & sun-dried tomatoes")
        
        #Meat Lovers' Pizza
        elif message.content.upper() == ("/MENU MEAT LOVERS PIZZA") or message.content.upper() == ("MENU MEAT LOVERS' PIZZA"):
            await client.send_message(message.channel, "_**Meat Lovers' Pizza**_\t\t$17 CAD\nTomato Sauce, basil, Mozzarella cheese, pepperoni,smoked ham, bacon and sausage")
       
        #Hawaiian Pizza
        elif message.content.upper() == ("/MENU HAWAIIAN PIZZA"):
            await client.send_message(message.channel, "_**Hawaiian Pizza**_\t\t$16 CAD\nTomato Sauce, basil, Mozzarella cheese,smoked ham, bacon & pineapple")
        
        #Deluxe Pizza
        elif message.content.upper() == ("/MENU DELUXE PIZZA"):
            await client.send_message(message.channel, "_**Deluxe Pizza**_\t\t$16 CAD\nTomato Sauce, basil, Mozzarella cheese, pepperoni, mushrooms & green peppers")
       
        #Veggie Lovers' Pizza
        elif message.content.upper() == ("/MENU VEGGIE LOVERS PIZZA") or message.content.upper() == ("/MENU VEGGIE LOVERS' PIZZA"):
            await client.send_message(message.channel, "_**Veggie Lovers' Pizza**_\t\t$15 CAD\nTomato Sauce, basil, Mozzarella cheese, green peppers, roasted red peppers, black olives & goat cheese")
       
        #Tuscan Pizza
        elif message.content.upper() == ("/MENU TUSCAN PIZZA"):
            await client.send_message(message.channel, "_**Tuscan Pizza**_\t\t$16 CAD\nTomato Sauce, basil, Mozzarella cheese, grilled eggplant, zucchini, roasted red pepper, black olives & goat cheese")
        
        #Pesto Chicken Pizza
        elif message.content.upper() == ("/MENU PESTO CHICKEN PIZZA"):
            await client.send_message(message.channel, "_**Pesto Chicken Pizza**_\t\t$16 CAD\nPesto Sauce, Mozzarella cheese, grilled chicken, mushrooms & roasted red peppers")
        
        #Grilled Chicken Pizza
        elif message.content.upper() == ("/MENU GRILLED CHICKEN PIZZA"):
            await client.send_message(message.channel, "_**Grilled Chicken Pizza**_\t\t$16 CAD\nTomato Sauce, basil, Mozzarella cheese, grilled chicken, red onions & roasted red peppers")
        
        #Pizza Modifications
        elif message.content.upper() == ("/MENU PIZZA MODIFICATIONS"):
            await client.send_message(message.channel, "_**Pizza Modifications**_\n\nWhole Wheat Crust\t$1\nOriginal\t$1\nBlack Olives\nHot Peppers\nMushrooms\nCapers\nTomatoes\nPineapple\nGreen Olives\nRed Onions\nOnions\nGreen Peppers\n\n*Gourmet*\t$1.50\nSun-dried Tomatoes\nRoasted Red Peppers\nGrilled Eggplant\nBroccoli\nArtichoke Hearts\nSpinach\nGrilled Zucchini\n\n*Cheese*\t$2\nGoat Cheese\nFeta Cheese\nDouble Cheese\nBocconcin Cheese\n\n*Meat*\t$2\nPepperoni\nItalian Sausage\nChicken\nSalami\nHam\nBacon\nProsciutto\nAnchovies\nMeatballs\nGround Beef")
        
        
        #Full Dinner Menu
        #Appetizers added, Salads added, seafood added, chicken added, veal added, vegetarian added, vegetarian pasta added, Kids menu added, Pasta with chicken added, Pasta with meat added,  Pasta with seafood added, Pizza added
        elif message.content.upper() == ("/MENU DINNER"):
            await client.send_message(message.channel, "**Appetizers**\n\nMinestrone Soup\t\t $5\nSoup of the Day\t\t $5\nGarlic Bread\t\t$4\nGarlic Cheese Bread\t\t $6\nBruschetta \t\t $6\nGrilled Calamari\t\t$11\nSmoked Salmon\t\t$8\nGarlic Shrimp\t\t$11\nEscargot\t\t$8\nMussels\t\t$11\nAppetizer Platter\t\t$28\nItalian Salad\tSmall $6 Large $11\nCaesar Salad\tSmall $6 Large $11\nCaprese Salad\tSmall $8 Large $13\nTopped with Feta Cheese\n\n\n") 
            await client.send_message(message.channel, "**Salads**\n\n*Salmon Salad*\t\t$19\nMixed greens tossed in our homemade balsamic vinagrette topped with a grilled salmon fillet\n*Chicken Salad*\t\t$17\nMixed greens tossed in our homemade Italian dressing topped with a grilled chicken breast\n*Sun-dried Tomato*\t\t$14\nMixed greens tossed in our homemade balsamic vinaigrette and Feta Cheese\n*Chicken Caesar Calad*\t\t$17\nRomaine Lettuce tossed in our homemade Caesar dressing topped with a grilled chicken breast\n\n\n")
            await client.send_message(message.channel, "Home Style Dressing\t\t$10\nCaesar Dressing\t$10\nBalsamic Dressing\t$10\nItalian Dressing\t$10\n\n\n")
            await client.send_message(message.channel, "**Seafood**\n\n*Poached Salmon*\t\t$21\nPoached salmon fillet served with our homemade yogurt dill sauce. Served with roasted potatoes and vegetables\n*Shrimp Marinara*\t\t$21\nBlack tiger shrimp sauteed in a white wine, garlic, tomato sauce. Served with Penne Pasta & vegetables\n*Grilled Salmon*\t\t$21\nGrilled salmon fillet topped with basil & olive oil. Served with roasted potatoes & vegetables\n*Grilled Blackened Salmon*\t\t$21 CAD\nBlackened Cajun spiced salmon fillet served with roasted potatoes & vegetables\n*Fillet of Sole*\t\t$20 CAD\nPan-seared Sole fillet topped with sun-dried tomatoes in a white wine garlic sauce.  Served with Penne pasta & vegetables\n*Honey Garlic Salmon*\t\t$21\nPan-seared salmon fillet topped with honey garlic cause. Served with roasted potatoes and vegetables")
            await client.send_message(message.channel, "**Chicken**\n\n*Grilled Chicken*\t\t$20\nGrilled chicken breast topped with basil and olive oil.  Served with roasted potatoes & vegetables\n*Lemon Chicken*\t\t$20\nPan-seared chicken breast topped with lemon sauce. Served with Penne pasta & vegetables\n*Chicken Cacciatore*\t\t$20\nPan-seared filletes of chicken topped with mushrooms, roasted red peppers & Kalamata olives in a red wine tomato sauce. Served with Penne pasta & vegetables.\n*Lemon Dijon Chicken*\t\t$20\nPan-seared chicken breast topped with a lemon Dijon mustard sauce. Served with Penne pasta & vegetables\n*Chicken Parmiagiano*\nBreaded chicken cutlet topped with tomato sauce, Mozzerella & Parmesan cheese. Served with Penne pasta & vegetables\n*Rosemary Duck*\t\t$23\nOven-roasted duck marinated in a Rosemary red wine sauce. Served with roasted potatoes and vegetables\n\n\n")
            await client.send_message(message.channel,"**Veal**\n\n*Lemon Veal*\t\t$23\nPan-seared veal topped with lemon sauce. Served with Penne pasta & vegetables\n*Veal Scallopini*\t\t$23\nBreaded veal cutlet topped with mushrooms roasted red peppers & Provolone cheese in a red wine tomato sauce. Served with roasted potatoes & vegetables\n*Veal Parimagiano*\t\t$23\nBReaded veal cutlet topped with tomato sauce.  Mozzerella & Parmesan cheese.  Seved with Penne Pasta & vegetables.\n*Veal Mushroom*\t\t$23\nPan-seared veal topped with a mushroom cream sauce. Served with Penne pasta & vegetables.\n\n\n")
            await client.send_message(message.channel,"**Vegetarian**\n\n*Eggplant Parmigiano*\t\t$17\nBreaded eggplant topped with tomato sauce, Mozzerella & Parmesan cheese. Served with Penne Pasta & Vegetables\n*Eggplant Bocconcini*\t\t$17\n Grilled eggplant stuffed with Bocconcini cheese & topped with tomato sauce. Served with Penne pasta & vegetables\n\n\n")
            await client.send_message(message.channel,"**Vegetarian Pasta**\n\n*Mediterranean Pasta*\t\t$16\nEggplant,zucchini,spinach,roasted red pepppers,Kalamata olives,Feta cheese, Penne Pasta, tomato sauce\n*Fettuccine Alfredo*\t\t$15\nSauteed mushrooms, Fettuccine pasta, cream sauce\n*Penne Vodka*\t\t$15\nSauteed mushrooms, Penne pasta, Vodka Rose sauce\n*Linguine Al Pesto*\t\t$14\nPine Nuts, Parmesan cheese, Linguine pasta, pesto sauce\n*Manicotti*\t\t$16\nFresh Pasta stuffed with Ricotta cheese, spinach, tomato sauce\n*Penne Arrabiata*\t\t$12\nPenne Pasta, spicy tomato sauce\n*Spaghetti Pomodoro*\t\t$12\nSpaghetti pasta, tomato sauce\n*Vegetarian Lasagna*\t\t$17\nLayers of fresh pasta,meatless Ground Round, Ricotta cheese & Mozzarella cheese, tomato sauce\n\n\n")        
            await client.send_message(message.channel, "**Kids Menu**\n*Fettucine Alfredo*\t\t$12\nPenne Pomodoro\t\t$12\nSpaghetti & Meatballs\t\t$12\nSpaghetti Bolognese\t\t$12\n\n\n")
            await client.send_message(message.channel, "**Pasta with Chicken**\n\n*Chicken Arriabiata*\t\t$16\nChicken breast, Cauliflower,Penne pasta,spicy tomato sauce\n*Raffaella*\t\t$16\nChicken Breast, roasted red peppers, sun-dried tomatoes,snow peas,Penne pasta, Rose Sauce\n*Chicken Carbonara*\t\t$16\nChicken breast,bacon,Parmesan cheese,Spaghetti pasta, cream sauce\n*Chicken Al Pesto*\t\t$16\nChicken breast, Pine nuts,Parmesan cheese,Linguine pasta,pesto sauce\n*Chicken Mushroom*\t\t$16\nChicken breast,sauteed mushrooms,Bowtie pasta,cream sauce\n*Chicken Penne*\t\t$16\nBreaded chicken,mushrooms,Penne pasta, pesto cream sauce")
            await client.send_message(message.channel, "**Pasta with Meat**\n\n*Ham Alfredo*\t\t$16\nSauteed mushrooms,smoked ham,Fettucine pasta,cream sauce\n*Veal aglio e Olio*\t\t$15\nChopped veal tenderloin, broccoli, roasted red peppers, Linguine pasta, oil & garlic\n*Lasagna*\t\t$17\nLayers of pasta, ground beef, Ricotta & Mozzarella cheese, tomato sauce\n*Spaghetti & Meatballs*\t\t$17\nOven roasted meatballs, sauteed mushrooms, Spaghetti pasta, tomato sauce\n*Spaghetti Bolognese*\t\t$16\nSauteed mushrooms, Spaghetti pasta, meat sauce\n*Penne Sausage*\t\t$15\nItalian sausage, red peppers, mushrooms, Penne, tomato sauce")
            await client.send_message(message.channel, "**Pasta with Seafood**\n\n*Shrimp Arrabiata*\t\t$18\nBlack tiger shrimp, Penne pasta, spicy tomato sauce\n*Shrimp al Pesto*\t\t$18\nBlack Tiger Shrimp, Pine nuts, Parmesan cheese, Linguine pasta, pesto sauce\n*Seafood Creole*\t\t$17\nShrimp, calamari, clams, salmon, mussels, Linguine pasta, Marinara sauce\n*Shrimp & Scallops*\t\t$22\nBlack tiger shrimp, fresh sea scallops, fresh tomatoes, Linguine pasta, tomato sauce\n*Fettuccine Salmon*\t\t$16\nFresh and smoked salmon, Fettucine pasta, Rose sauce\n*Linguine Clams\t\t$16*\nFresh & baby clams, Linguine pasta, tomato sauce\n*Shrimp & Mussels*\t\t$17\nBlack tiger shrimp, mussels, Bowtie pasta, Terragon cream sauce\n*Shrimp Portabello*\t\t$18\nBlack tiger chrimp, snow peas, capers, Portobello mushrooms, Fettuccine pasta, Rose Sauce")
            await client.send_message(message.channel, "**Gourmet Pizza**\n*Basic Pizza*\t\t$11\nTomato sauce, basil and Mozzarella cheese\n*Bruschetta Pizza*\t\t$14\nTomato sauce, basil, Mozzarella cheese & bruschetta mix\n*Italian sausage Pizza*\t\t$16\nTomato sauce, basil, Mozzarella cheese, tomatoes, bacon & Italian sausage\n*Genovese Pizza*\t\t$16\nTomato sauce, basil, Mozzarella cheese, grilled chicken, artichoke hearts & sun-dried tomatoes\n*Meat Lovers' Pizza*\t\t$17\nTomato Sauce, basil, Mozzarella cheese, pepperoni,smoked ham, bacon and sausage\n*Hawaiian Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese,smoked ham, bacon & pineapple\n*Deluxe Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese, pepperoni, mushrooms & green peppers\n*Veggie Lovers'Pizza*\t\t$15\nTomato Sauce, basil, Mozzarella cheese, green peppers, roasted red peppers, black olives & goat cheese\n*Tuscan Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese, grilled eggplant, zucchini, roasted red pepper, black olives & goat cheese\n*Pesto Chicken Pizza*\t\t$16\nPesto Sauce, Mozzarella cheese, grilled chicken, mushrooms & roasted red peppers\n*Grilled Chicken Pizza*\t\t$16\Tomato Sauce, basil, Mozzarella cheese, grilled chicken, red onions & roasted red peppers\nWhole Wheat Crust\t$1\nOriginal\t$1\nBlack Olives\nHot Peppers\nMushrooms\nCapers\nTomatoes\nPineapple\nGreen Olives\nRed Onions\nOnions\nGreen Peppers\n\n*Gourmet*\t$1.50\nSun-dried Tomatoes\nRoasted Red Peppers\nGrilled Eggplant\nBroccoli\nArtichoke Hearts\nSpinach\nGrilled Zucchini\n\n*Cheese*\t$2\nGoat Cheese\nFeta Cheese\nDouble Cheese\nBocconcin Cheese\n\n*Meat*\t$2\nPepperoni\nItalian Sausage\nChicken\nSalami\nHam\nBacon\nProsciutto\nAnchovies\nMeatballs\nGround Beef\n\n\n")
        
        elif message.content.upper() == ("/MENU LUNCH"):
            await client.send_message(message.channel, "**Appetizers**\n\nMinestrone Soup\t\t $5\nSoup of the Day\t\t $5\nGarlic Bread\t\t$4\nGarlic Cheese Bread\t\t $6\nBruschetta \t\t $6\nGrilled Calamari\t\t$11\nSmoked Salmon\t\t$8\nGarlic Shrimp\t\t$11\nEscargot\t\t$8\nMussels\t\t$11\nAppetizer Platter\t\t$28\nItalian Salad\tSmall $6 Large $11\nCaesar Salad\tSmall $6 Large $11\nCaprese Salad\tSmall $8 Large $13\nTopped with Feta Cheese\n\n\n") 
            await client.send_message(message.channel, "**Salads**\n\n*Salmon Salad*\t\t$16\nMixed greens tossed in our homemade balsamic vinagrette topped with a grilled salmon fillet\n*Chicken Salad*\t\t$15\nMixed greens tossed in our homemade Italian dressing topped with a grilled chicken breast\n*Sun-dried Tomato*\t\t$13\nMixed greens tossed in our homemade balsamic vinaigrette and Feta Cheese\n*Chicken Caesar Calad*\t\t$15\nRomaine Lettuce tossed in our homemade Caesar dressing topped with a grilled chicken breast\n\n\n")
            await client.send_message(message.channel, "**Sandwiches**(Only available at lunch)\n\n*Chicken Wrap\t\t$13\nGrilled chicken breast, roasted red peppers and mushrooms tossed in a tomato sauce, served in a spft tortilla\n*Chicken Club Sandwich\t\t$13\nGrilled chicken breast, tomatoes, lettuce and Mayonnaise\n*Cajun Chicken Sandwich*\t\t$13\nCajun spiced grilled chicken breast, tomatoes, lettuce and Mayonnaise, served on a bun\n*Veal Sandwich*\t\t$13\nBreaded veal cutlet topped with tomato sauce, Mozzarella and Parmesan cheese, served on a bun\n*Tuscan Sandwich*\t\t$13\nGrilled eggplant, zucchini, roasted red peppers and Goat cheese topped with tomato sauce. Served on a bun\n*Chicken Caesar Wrap*\t\t$13\nGrilled Chicken breast, bacon bits and Romaine lettuce tossed in our homemade Caesar dressing. Served in a soft tortilla")
            await client.send_message(message.channel,"**Vegetarian Pasta**\n\n*Mediterranean Pasta*\t\t$13\nEggplant,zucchini,spinach,roasted red pepppers,Kalamata olives,Feta cheese, Penne Pasta, tomato sauce\n*Fettuccine Alfredo*\t\t$12\nSauteed mushrooms, Fettuccine pasta, cream sauce\n*Penne Vodka*\t\t$12\nSauteed mushrooms, Penne pasta, Vodka Rose sauce\n*Linguine Al Pesto*\t\t$12\nPine Nuts, Parmesan cheese, Linguine pasta, pesto sauce\n*Manicotti*\t\t$13\nFresh Pasta stuffed with Ricotta cheese, spinach, tomato sauce\n*Penne Arrabiata*\t\t$11\nPenne Pasta, spicy tomato sauce\n*Spaghetti Pomodoro*\t\t$11\nSpaghetti pasta, tomato sauce\n*Vegetarian Lasagna*\t\t$14\nLayers of fresh pasta,meatless Ground Round, Ricotta cheese & Mozzarella cheese, tomato sauce\n\n\n")        
            await client.send_message(message.channel, "**Kids Menu**\n*Fettucine Alfredo*\t\t$12\nPenne Pomodoro\t\t$12\nSpaghetti & Meatballs\t\t$12\nSpaghetti Bolognese\t\t$12\n\n\n")
            await client.send_message(message.channel, "**Pasta with Seafood**\n\n*Shrimp Arrabiata*\t\t$14\nBlack tiger shrimp, Penne pasta, spicy tomato sauce\n*Shrimp al Pesto*\t\t$14\nBlack Tiger Shrimp, Pine nuts, Parmesan cheese, Linguine pasta, pesto sauce\n*Seafood Creole*\t\t$14\nShrimp, calamari, clams, salmon, mussels, Linguine pasta, Marinara sauce\n*Shrimp & Scallops*\t\t$20\nBlack tiger shrimp, fresh sea scallops, fresh tomatoes, Linguine pasta, tomato sauce\n*Fettuccine Salmon*\t\t$14\nFresh and smoked salmon, Fettucine pasta, Rose sauce\n*Linguine Clams*\t\t$14\nFresh & baby clams, Linguine pasta, tomato sauce\n*Shrimp & Mussels*\t\t$14\nBlack tiger shrimp, mussels, Bowtie pasta, Terragon cream sauce\n*Shrimp Portabello*\t\t$14\nBlack tiger chrimp, snow peas, capers, Portobello mushrooms, Fettuccine pasta, Rose Sauce")
            
            await client.send_message(message.channel, "**Pasta with Chicken**\n\n*Chicken Arriabiata*\t\t$13\nChicken breast, Cauliflower,Penne pasta,spicy tomato sauce\n*Raffaella*\t\t$13\nChicken Breast, roasted red peppers, sun-dried tomatoes,snow peas,Penne pasta, Rose Sauce\n*Chicken Carbonara*\t\t$13\nChicken breast,bacon,Parmesan cheese,Spaghetti pasta, cream sauce\n*Chicken Al Pesto*\t\t$13\nChicken breast, Pine nuts,Parmesan cheese,Linguine pasta,pesto sauce\n*Chicken Mushroom*\t\t$13\nChicken breast,sauteed mushrooms,Bowtie pasta,cream sauce\n*Chicken Penne*\t\t$13\nBreaded chicken,mushrooms,Penne pasta, pesto cream sauce")
            await client.send_message(message.channel, "**Pasta with Meat**\n\n*Ham Alfredo*\t\t$13\nSauteed mushrooms,smoked ham,Fettucine pasta,cream sauce\n*Veal aglio e Olio*\t\t$12\nChopped veal tenderloin, broccoli, roasted red peppers, Linguine pasta, oil & garlic\n*Lasagna*\t\t$14\nLayers of pasta, ground beef, Ricotta & Mozzarella cheese, tomato sauce\n*Spaghetti & Meatballs*\t\t$14\nOven roasted meatballs, sauteed mushrooms, Spaghetti pasta, tomato sauce\n*Spaghetti Bolognese*\t\t$13\nSauteed mushrooms, Spaghetti pasta, meat sauce\n*Penne Sausage*\t\t$13\nItalian sausage, red peppers, mushrooms, Penne, tomato sauce")
            await client.send_message(message.channel, "**Gourmet Pizza**\n*Basic Pizza*\t\t$11\nTomato sauce, basil and Mozzarella cheese\n*Bruschetta Pizza*\t\t$14\nTomato sauce, basil, Mozzarella cheese & bruschetta mix\n*Italian sausage Pizza*\t\t$16\nTomato sauce, basil, Mozzarella cheese, tomatoes, bacon & Italian sausage\n*Genovese Pizza*\t\t$16\nTomato sauce, basil, Mozzarella cheese, grilled chicken, artichoke hearts & sun-dried tomatoes\n*Meat Lovers' Pizza*\t\t$17\nTomato Sauce, basil, Mozzarella cheese, pepperoni,smoked ham, bacon and sausage\n*Hawaiian Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese,smoked ham, bacon & pineapple\n*Deluxe Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese, pepperoni, mushrooms & green peppers\n*Veggie Lovers'Pizza*\t\t$15\nTomato Sauce, basil, Mozzarella cheese, green peppers, roasted red peppers, black olives & goat cheese\n*Tuscan Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese, grilled eggplant, zucchini, roasted red pepper, black olives & goat cheese\n*Pesto Chicken Pizza*\t\t$16\nPesto Sauce, Mozzarella cheese, grilled chicken, mushrooms & roasted red peppers\n*Grilled Chicken Pizza*\t\t$16\Tomato Sauce, basil, Mozzarella cheese, grilled chicken, red onions & roasted red peppers\nWhole Wheat Crust\t$1\nOriginal\t$1\nBlack Olives\nHot Peppers\nMushrooms\nCapers\nTomatoes\nPineapple\nGreen Olives\nRed Onions\nOnions\nGreen Peppers\n\n*Gourmet*\t$1.50\nSun-dried Tomatoes\nRoasted Red Peppers\nGrilled Eggplant\nBroccoli\nArtichoke Hearts\nSpinach\nGrilled Zucchini\n\n*Cheese*\t$2\nGoat Cheese\nFeta Cheese\nDouble Cheese\nBocconcin Cheese\n\n*Meat*\t$2\nPepperoni\nItalian Sausage\nChicken\nSalami\nHam\nBacon\nProsciutto\nAnchovies\nMeatballs\nGround Beef\n\n\n")
            
            #entrees
            await client.send_message(message.channel,"__**Entrees**__\n\n\n**Veal**\n\n*Lemon Veal*\t\t$16\nPan-seared veal topped with lemon sauce. Served with Penne pasta & vegetables\n*Veal Scallopini*\t\t$16\nBreaded veal cutlet topped with mushrooms roasted red peppers & Provolone cheese in a red wine tomato sauce. Served with roasted potatoes & vegetables\n*Veal Parimagiano*\t\t$16\nBReaded veal cutlet topped with tomato sauce, Mozzerella & Parmesan cheese.  Seved with Penne Pasta & vegetables.\n*Veal Mushroom*\t\t$16\nPan-seared veal topped with a mushroom cream sauce. Served with Penne pasta & vegetables.\n\n\n")            
            await client.send_message(message.channel,"**Vegetarian**\n\n*Eggplant Parmigiano*\t\t$14\nBreaded eggplant topped with tomato sauce, Mozzerella & Parmesan cheese. Served with Penne Pasta & Vegetables\n*Eggplant Bocconcini*\t\t$14\n Grilled eggplant stuffed with Bocconcini cheese & topped with tomato sauce. Served with Penne pasta & vegetables\n\n\n")
            await client.send_message(message.channel, "*Chicken Parmigiano*\t\t$16 CAD \nBreaded chicken cutlet topped with tomato sauce, Mozzarella & Parmesan cheese. Served with Penne pasta & vegetables\n")
            await client.send_message(message.channel, "\n*Shrimp Marinara*\t\t$16\nBlack tiger shrimp sauteed in a white wine, garlic, tomato sauce. Served with Penne Pasta & vegetables\n*Grilled Salmon*\t\t$16\nGrilled salmon fillet topped with basil & olive oil. Served with roasted potatoes & vegetables\n*Grilled Blackened Salmon*\t\t$16 CAD\nBlackened Cajun spiced salmon fillet served with roasted potatoes & vegetables\n*Fillet of Sole*\t\t$15 CAD\nPan-seared Sole fillet topped with sun-dried tomatoes in a white wine garlic sauce.  Served with Penne pasta & vegetables\n*Honey Garlic Salmon*\t\t$16\nPan-seared salmon fillet topped with honey garlic cause. Served with roasted potatoes and vegetables")
            
            
                    
        #Appertizers         
        elif message.content.upper() == ("/MENU APPETIZERS") or message.content.upper() == ("/MENU APPETIZER"):
            await client.send_message(message.channel, "**Appetizers**\n\nMinestrone Soup\t\t $5\nSoup of the Day\t\t $5\nGarlic Bread\t\t$4\nGarlic Cheese Bread\t\t $6\nBruschetta \t\t $6\nGrilled Calamari\t\t$11\nSmoked Salmon\t\t$8\nGarlic Shrimp\t\t$11\nEscargot\t\t$8\nMussels\t\t$11\nAppetizer Platter\t\t$28\nItalian Salad\tSmall $6 Large $11\nCaesar Salad\tSmall $6 Large $11\nCaprese Salad\tSmall $8 Large $13\nTopped with Feta Cheese") 
        
        #Salads
        elif message.content.upper() == ("/MENU SALADS") or message.content.upper() == ("/MENU SALAD"):
            await client.send_message(message.channel, "**Salads**\n\n*Salmon Salad*\t\t$19\nMixed greens tossed in our homemade balsamic vinagrette topped with a grilled salmon fillet\n*Chicken Salad*\t\t$17\nMixed greens tossed in our homemade Italian dressing topped with a grilled chicken breast\n*Sun-dried Tomato*\t\t$14\nMixed greens tossed in our homemade balsamic vinaigrette and Feta Cheese\n*Chicken Caesar Calad*\t\t$17\nRomaine Lettuce tossed in our homemade Caesar dressing topped with a grilled chicken breast")
        
        #Sandwiches
        elif message.content.upper() == ("/MENU SANDWICHES"):
            await client.send_message(message.channel, "**Sandwiches**(Only available at lunch)\n\n*Chicken Wrap\t\t$13\nGrilled chicken breast, roasted red peppers and mushrooms tossed in a tomato sauce, served in a spft tortilla\n*Chicken Club Sandwich\t\t$13\nGrilled chicken breast, tomatoes, lettuce and Mayonnaise\n*Cajun Chicken Sandwich*\t\t$13\nCajun spiced grilled chicken breast, tomatoes, lettuce and Mayonnaise, served on a bun\n*Veal Sandwich*\t\t$13\nBreaded veal cutlet topped with tomato sauce, Mozzarella and Parmesan cheese, served on a bun\n*Tuscan Sandwich*\t\t$13\nGrilled eggplant, zucchini, roasted red peppers and Goat cheese topped with tomato sauce. Served on a bun\n*Chicken Caesar Wrap*\t\t$13\nGrilled Chicken breast, bacon bits and Romaine lettuce tossed in our homemade Caesar dressing. Served in a soft tortilla")
        
        #Home Style Dressings    
        elif message.content.upper() == ("/MENU DRESSINGS") or message.content.upper() == ("/MENU DRESSING"):
            await client.send_message(message.channel, "Home Style Dressing\t\t$10\nCaesar Dressing\t$10\nBalsamic Dressing\t$10\nItalian Dressing\t$10\n")
        
        #Seafood 
        elif message.content.upper() == ("/MENU SEAFOOD"):
            await client.send_message(message.channel, " **Seafood**\n\n*Poached Salmon*\t\t$21\nPoached salmon fillet served with our homemade yogurt dill sauce. Served with roasted potatoes and vegetables\n*Shrimp Marinara*\t\t$21\nBlack tiger shrimp sauteed in a white wine, garlic, tomato sauce. Served with Penne Pasta & vegetables\n*Grilled Salmon*\t\t$21\nGrilled salmon fillet topped with basil & olive oil. Served with roasted potatoes & vegetables\n*Grilled Blackened Salmon*\t\t$21 CAD\nBlackened Cajun spiced salmon fillet served with roasted potatoes & vegetables\n*Fillet of Sole*\nPan-seared Sole fillet topped with sun-dried tomatoes in a white wine garlic sauce.  Served with Penne pasta & vegetables\n*Honey Garlic Salmon*\t\t$21\nPan-seared salmon fillet topped with honey garlic cause. Served with roasted potatoes and vegetables")
     
        
        #Chicken 
        elif message.content.upper() == ("/MENU CHICKEN"):
            await client.send_message(message.channel, "**Chicken**\n\n*Grilled Chicken*\t\t$20\nGrilled chicken breast topped with basil and olive oil.  Served with roasted potatoes & vegetables\n*Lemon Chicken*\t\t$20\nPan-seared chicken breast topped with lemon sauce. Served with Penne pasta & vegetables\n*Chicken Cacciatore*\t\t$20\nPan-seared filletes of chicken topped with mushrooms, roasted red peppers & Kalamata olives in a red wine tomato sauce. Served with Penne pasta & vegetables.\n*Lemon Dijon Chicken*\t\t$20\nPan-seared chicken breast topped with a lemon Dijon mustard sauce. Served with Penne pasta & vegetables\n*Chicken Parmiagiano*\nBreaded chicken cutlet topped with tomato sauce, Mozzerella & Parmesan cheese. Served with Penne pasta & vegetables\n*Rosemary Duck*\t\t$23\nOven-roasted duck marinated in a Rosemary red wine sauce. Served with roasted potatoes and vegetables")
        
        #Veal
        elif message.content.upper() == ("/MENU VEAL"):
            await client.send_message(message.channel,"**Veal**\n\n*Lemon Veal*\t\t$23\nPan-seared veal topped with lemon sauce. Served with Penne pasta & vegetables\n*Veal Scallopini\t\t$23\nBreaded veal cutlet topped with mushrooms roasted red peppers & Provolone cheese in a red wine tomato sauce. Served with roasted potatoes & vegetables\n*Veal Parimagiano*\t\t$23\nBreaded veal cutlet topped with tomato sauce.  Mozzerella & Parmesan cheese.  Served with Penne Pasta & vegetables.\n*Veal Mushroom*\t\t$23\nPan-seared veal topped with a mushroom cream sauce. Served with Penne pasta & vegetables.")
        
        #Vegetarian
        elif message.content.upper() == ("/MENU VEGETARIAN"):
            await client.send_message(message.channel,"**Vegetarian**\n\n*Eggplant Parmigiano*\t\t$17\nBreaded eggplant topped with tomato sauce, Mozzerella & Parmesan cheese. Served with Penne Pasta & Vegetables\n*Eggplant Bocconcini*\t\t$17\n Grilled eggplant stuffed with Bocconcini cheese & topped with tomato sauce. Served with Penne pasta & vegetables")
        
        #Vegetarian Pasta 
        elif message.content.upper() == ("/MENU VEGETARIAN PASTA"):
            await client.send_message(message.channel,"**Vegetarian Pasta**\n\nMediterranean Pasta\t\t$16\nEggplant,zucchini,spinach,roasted red pepppers,Kalamata olives,Feta cheese, Penne Pasta, tomato sauce\nFettuccine Alfredo\t\t$15\nSauteed mushrooms, Fettuccine pasta, cream sauce\n*Penne Vodka*\t\t$15\nSauteed mushrooms, Penne pasta, Vodka Rose sauce\n*Linguine Al Pesto*\t\t$14\nPine Nuts, Parmesan cheese, Linguine pasta, pesto sauce\n*Manicotti*\t\t$16\nFresh Pasta stuffed with Ricotta cheese, spinach, tomato sauce\n*Penne Arrabiata*\t\t$12\nPenne Pasta, spicy tomato sauce\n*Spaghetti Pomodoro*\t\t$12\nSpaghetti pasta, tomato sauce\n*Vegetarina Lasagna*\t\t$17\nLayers of fresh pasta,meatless Ground Round, Rcotta cheese & MOzzarella cheese, tomato sauce")        
            
        #Kids Menu
        elif message.content.upper() == ("/MENU KIDS MENU") or message.content.upper() == ("/MENU KID MENU") or message.content.upper() == ("/MENU KID'S MENU"):
            await client.send_message(message.channel, "**Kids Menu**\nFettucine Alfredo\t\t$12\nPenne Pomodoro\t\t$12\nSpaghetti & Meatballs\t\t$12\nSpaghetti Bolognese\t\t$12")
        
        #Pasta with Chicken
        elif message.content.upper() == ("/MENU PASTA WITH CHICKEN") or message.content.upper() == ("/MENU CHICKEN_PASTA"):
            await client.send_message(message.channel, "**Pasta with Chicken**\n\n*Chicken Arriabiata*\t\t$16\nChicken breast, Cauliflower,Penne pasta,spicy tomato sauce\n*Raffaella*\t\t$16\nChicken Breast, roasted red peppers, sun-dried tomatoes,snow peas,Penne pasta, Rose Sauce\n*Chicken Carbonara*\t\t$16\nChicken breast,bacon,Parmesan cheese,Spaghetti pasta, cream sauce\n*Chicken Al Pesto*\t\t$16\nChicken breast, Pine nuts,Parmesan cheese,Linguine pasta,pesto sauce\nChicken Mushroom\t\t$16\nChicken breast,sauteed mushrooms,Bowtie pasta,cream sauce\n*Chicken Penne*\t\t$16\nBreaded chicken,mushrooms,Penne pasta, pesto cream sauce")
        
        #Pasta with Meat
        elif message.content.upper() == ("/MENU PASTA WITH MEAT") or message.content.upper() == ("/MENU MEAT PASTA"):
            await client.send_message(message.channel, "**Pasta with Meat**\n\n*Ham Alfredo*\t\t$16\nSauteed mushrooms,smoked ham,Fettucine pasta,cream sauce\n*Veal aglio e Olio*\t\t$15\nChopped veal tenderloin, broccoli, roasted red peppers, Linguine pasta, oil & garlic\n*Lasagna*\t\t$17\nLayers of pasta, ground beef, Ricotta & Mozzarella cheese, tomato sauce\n*Spaghetti & Meatballs*\t\t$17\nOven roasted meatballs, sauteed mushrooms, Spaghetti pasta, tomato sauce\n*Spaghetti Bolognese*\t\t$16\nSauteed mushrooms, Spaghetti pasta, meat sauce\n*Penne Sausage*\t\t$15\nItalian sausage, red peppers, mushrooms, Penne, tomato sauce")
        
        #Pasta with Seafood
        elif message.content.upper() == ("/MENU PASTA WITH SEAFOOD") or message.content.upper() == ("/MENU SEAFOOD PASTA"):
            await client.send_message(message.channel, "**Pasta with Seafood**\n\n*Shrimp Arrabiata*\t\t$18\nBlack tiger shrimp, Penne pasta, spicy tomato sauce\n*Shrimp al Pesto*\t\t$18\nBlack Tiger Shrimp, Pine nuts, Parmesan cheese, Linguine pasta, pesto sauce\n*Seafood Creole*\t\t$17\nShrimp, calamari, clams, salmon, mussels, Linguine pasta, Marinara sauce\n*Shrimp & Scallops*\t\t$22\nBlack tiger shrimp, fresh sea scallops, fresh tomatoes, Linguine pasta, tomato sauce\n*Fettuccine Salmon*\t\t$16\nFresh and smoked salmon, Fettucine pasta, Rose sauce\n*Linguine Clams*\t\t$16\nFresh & baby clams, Linguine pasta, tomato sauce\n*Shrimp & Mussels\t\t$17\nBlack tiger shrimp, mussels, Bowtie pasta, Terragon cream sauce\n*Shrimp Portabello\t\t$18\nBlack tiger chrimp, snow peas, capers, Portobello mushrooms, Fettuccine pasta, Rose Sauce")
        
        #Add Contents of Pizza later
        elif message.content.upper() == ("/MENU PIZZAS") or message.content.upper() == ("/MENU PIZZA"):
            await client.send_message(message.channel, "**Gourmet Pizza**\n*Basic Pizza*\t\t$11\nTomato sauce, basil and Mozzarella cheese\n*Bruschetta Pizza*\t\t$14\nTomato sauce, basil, Mozzarella cheese & bruschetta mix\n*Italian sausage Pizza*\t\t$16\nTomato sauce, basil, Mozzarella cheese, tomatoes, bacon & Italian sausage\n*Genovese Pizza*\t\t$16\nTomato sauce, basil, Mozzarella cheese, grilled chicken, artichoke hearts & sun-dried tomatoes\n*Meat Lovers' Pizza*\t\t$17\nTomato Sauce, basil, Mozzarella cheese, pepperoni,smoked ham, bacon and sausage\n*Hawaiin Pizza\t\t$16\nTomato Sauce, basil, Mozzarella cheese,smoked ham, bacon & pineapple\n*Deluxe Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese, pepperoni, mushrooms & green peppers\n*Veggie Lovers'Pizza*\t\t$15\nTomato Sauce, basil, Mozzarella cheese, green peppers, roasted red peppers, black olives & goat cheese\n*Tuscan Pizza*\t\t$16\nTomato Sauce, basil, Mozzarella cheese, grilled eggplant, zucchini, roasted red pepper, black olives & goat cheese\n*Pesto Chicken Pizza*\t\t$16\nPesto Sauce, Mozzarella cheese, grilled chicken, mushrooms & roasted red peppers\n*Grilled Chicken Pizza*\t\t$16\Tomato Sauce, basil, Mozzarella cheese, grilled chicken, red onions & roasted red peppers\nWhole Wheat Crust\t$1\nOriginal\t$1\nBlack Olives\nHot Peppers\nMushrooms\nCapers\nTomatoes\nPineapple\nGreen Olives\nRed Onions\nOnions\nGreen Peppers\n\n*Gourmet*\t$1.50\nSun-dried Tomatoes\nRoasted Red Peppers\nGrilled Eggplant\nBroccoli\nArtichoke Hearts\nSpinach\nGrilled Zucchini\n\n*Cheese*\t$2\nGoat Cheese\nFeta Cheese\nDouble Cheese\nBocconcin Cheese\n\n*Meat*\t$2\nPepperoni\nItalian Sausage\nChicken\nSalami\nHam\nBacon\nProsciutto\nAnchovies\nMeatballs\nGround Beef")
                     
        else:
            await client.send_message(message.channel, "Please check your spelling. Unfortunately, I am unable to recognize that menu item.")
        
    
    
    

client.login(process.env.BOT_TOKEN)
client.run("NDc0NzAxNDEyMDM1NzIzMjY0.DkUbGQ.L5m6UTm1OtkUs2sMlwm1MKUIm2s")
