function generateCommands() {
    //Variables
    var items = document.getElementById("inputItems").value.replace(/^\s*[\r\n]/gm, ''); //replace all blank lines for nothing
    var quality = "&quality=" + document.getElementById("selectQuality").options[document.getElementById("selectQuality").selectedIndex].value;
    var craftable = "&craftable=" + document.getElementById("selectCraftable").options[document.getElementById("selectCraftable").selectedIndex].value;
    var australium = "&australium=" + document.getElementById("selectAustralium").options[document.getElementById("selectAustralium").selectedIndex].value;
    var killstreak = "&killstreak=" + document.getElementById("selectKillstreak").options[document.getElementById("selectKillstreak").selectedIndex].value;
    var effect = "&effect=" + document.getElementById("inputEffect").value;
    var intent = "&intent=" + document.getElementById("selectIntent").options[document.getElementById("selectIntent").selectedIndex].value;
    var limit = "&limit=" + document.getElementById("inputLimit").value;

    var buyKeys = "&buy_keys=" + document.getElementById("inputBuyKeys").value;
    var buyMetal = "&buy_metal=" + document.getElementById("inputBuyMetal").value;
    var sellKeys = "&sell_keys=" + document.getElementById("inputSellKeys").value;
    var sellMetal = "&sell_metal=" + document.getElementById("inputSellMetal").value;

    var autopricer = document.getElementById("buttonAutopricer").innerHTML;

    var outputCommands;

    //Clears Output
    document.getElementById("outputCommands").innerHTML = "";

    //Have the option to add, update or remove items
    var itemAction = document.getElementById("selectItemAction").options[document.getElementById("selectItemAction").selectedIndex].value;
    var itemOption;

    //Handle item option input
    switch (itemAction) {
        case "Add":
            itemOption = "!add name=";
            break;

        case "Update":
            itemOption = "!update name=";
            break;

        case "Remove":
            itemOption = "!remove item=";
    }

    //Filter data because of the bot's default values
    var autoprice;

    if (autopricer == "Enable Autopricer") {
        autoprice = "&autoprice=false"
    }

    if (quality == "&quality=Unique") {
        quality = "";
    }

    if (craftable == "&craftable=true") {
        craftable = "";
    }

    if (australium == "&australium=false") {
        australium = "";
    }

    if (killstreak == "&killstreak=0") {
        killstreak = "";
    }

    if (effect == "&effect=") {
        effect = "";
    }

    //Make intent=bank to nothing if adding a item
    if (intent == "&intent=bank" && itemAction == "Add") {
        intent = "";
    }

    //Make limit=1 to nothing if adding a item
    if (limit == "&limit=1" && itemAction == "Add") {
        limit = "";
    } 

    //If the autopricer is disabled, check if the user inputed the price of the item
    if (buyKeys == "&buy_keys=" && buyMetal == "&buy_metal=" && sellKeys == "&sell_keys=" && sellMetal == "&sell_metal=" && autoprice == "&autoprice=false") {
        document.getElementById("outputCommands").innerHTML = "Please fill up the pricing";
        alert("Please fill up the pricing");
        return;
    }

    if (buyKeys == "&buy_keys=" && autoprice == "&autoprice=false") {
        document.getElementById("outputCommands").innerHTML = "Please fill up Buy Keys";
        alert("Please fill up Buy Keys");
        return;
    }

    if (buyMetal == "&buy_metal=" && autoprice == "&autoprice=false") {
        document.getElementById("outputCommands").innerHTML = "Please fill up Buy Metal";
        alert("Please fill up Buy Metal");
        return;
    }

    if (sellKeys == "&sell_keys=" && autoprice == "&autoprice=false") {
        document.getElementById("outputCommands").innerHTML = "Please fill up Sell Keys";
        alert("Please fill up Sell Keys");
        return;
    }

    if (sellMetal == "&sell_metal=" && autoprice == "&autoprice=false") {
        document.getElementById("outputCommands").innerHTML = "Please fill up Sell Metal";
        alert("Please fill up Sell Metal");
        return;
    }

    //Split Each Item (from each line) To Array
    var itemArray = items.split("\n");


    //Process Data
    for (var counter = 0; counter < itemArray.length; counter++) {
        if (itemAction != "Remove") {
            if (autopricer == "Enable Autopricer") {
                outputCommands = itemArray[counter].trim() + quality + craftable + australium + killstreak + effect + intent + autoprice + String(sellKeys) + String(sellMetal) + String(buyKeys) + String(buyMetal) + String(limit);
            } else {
                outputCommands = itemArray[counter].trim() + quality + craftable + australium + killstreak + effect + intent + limit;
            }
        } else {
            outputCommands = itemArray[counter].trim();
        }

            //If there is no item name, dont output nothing
            if (itemArray[counter].trim() == "") {
                document.getElementById("outputCommands").innerHTML += "" + "\n";
            } else {
                //Output
                document.getElementById("outputCommands").innerHTML += itemOption + outputCommands.trim() + "\n";
            }
    }
}