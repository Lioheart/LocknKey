import { cModuleName, Translate} from "../utils/LnKutils.js";

Hooks.once("init", () => {  // game.settings.get(cModuleName, "")
  //Settings
  game.settings.register(cModuleName, "useGMquickKeys", {
	name: Translate("Settings.useGMquickKeys.name"),
	hint: Translate("Settings.useGMquickKeys.descrp"),
	scope: "world",
	config: true,
	type: Boolean,
	default: true
  }); 
  
  game.settings.register(cModuleName, "allowLocking", {
	name: Translate("Settings.allowLocking.name"),
	hint: Translate("Settings.allowLocking.descrp"),
	scope: "world",
	config: true,
	type: Boolean,
	default: true
  }); 
  
  game.settings.register(cModuleName, "startasLocked", {
	name: Translate("Settings.startasLocked.name"),
	hint: Translate("Settings.startasLocked.descrp"),
	scope: "world",
	config: true,
	type: Boolean,
	default: false
  }); 
  
  game.settings.register(cModuleName, "LockDistance", {
	name: Translate("Settings.LockDistance.name"),
	hint: Translate("Settings.LockDistance.descrp"),
	scope: "world",
	config: true,
	type: Number,
	default: 15
  }); 
  
  game.settings.register(cModuleName, "alwaysopenOwned", {
	name: Translate("Settings.alwaysopenOwned.name"),
	hint: Translate("Settings.alwaysopenOwned.descrp"),
	scope: "world",
	config: true,
	type: Boolean,
	default: true
  }); 
  
  /*
  game.settings.register(cModuleName, "autoKeyuse", {
	name: Translate("Settings.autoKeyuse.name"),
	hint: Translate("Settings.autoKeyuse.descrp"),
	scope: "world",
	config: true,
	type: Boolean,
	default: true
  }); 
  */
  
  //client
  game.settings.register(cModuleName, "MessagePopUps", {
	name: Translate("Settings.MessagePopUps.name"),
	hint: Translate("Settings.MessagePopUps.descrp"),
	scope: "client",
	config: true,
	type: Boolean,
	default: true
  }); 
});

//Hooks
Hooks.on("renderSettingsConfig", (pApp, pHTML, pData) => {
	//add a few titles	
	
	let vnewHTML;
	
	if (game.user.isGM) {
		//first world setting
		vnewHTML = `<h3 class="border">${Translate("Titles.WorldSettings")}</h3>`;
		 
		pHTML.find('input[name="' + cModuleName + '.useGMquickKeys"]').closest(".form-group").before(vnewHTML);
		
		//gm controlls
		vnewHTML = ``;
		for (let i = 0; i <= 4; i++) {
			vnewHTML = vnewHTML + `<p>${Translate("Text.GMControls.line"+i)}</p>`
		}
		
		pHTML.find('input[name="' + cModuleName + '.alwaysopenOwned"]').closest(".form-group").after(vnewHTML);
		
		//first client setting
		vnewHTML = `
					<hr>
					<h3 class="border">${Translate("Titles.ClientSettings")}</h3>
					`;
		 
		pHTML.find('input[name="' + cModuleName + '.MessagePopUps"]').closest(".form-group").before(vnewHTML);
	}
});