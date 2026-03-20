class Weight {
	static validUnits = [
		"tonne", "kg", "g", "mg"
	]
	constructor(x) {
		if (Weight.validUnits.includes(x.replace(/(\s)+/g, " ").split(" ")[1])) {
			this.unit = x.replace(/(\s)+/g, " ").split(" ")[1]
		} else {
			this.unit = "Invalid Unit"
		}
		this.number = x.replace(/(\s)+/g, " ").split(" ")[0]
	}
}
class Height {
	static validUnits = [
		"ly", "Pm", "Tm", "Gm", "Mm", "km", "m", "cm", "mm", "µm", "nm", "pm", "am", "zm", "ym", "rm", "qm"
	]
	constructor(x) {
		if (Height.validUnits.includes(x.replace(/(\s)+/g, " ").split(" ")[1])) {
			this.unit = x.replace(/(\s)+/g, " ").split(" ")[1]
		} else {
			this.unit = "Invalid Unit"
		}
		this.number = x.replace(/(\s)+/g, " ").split(" ")[0]
	}
}
class Money {
	static validUnits = [
		"TCN"
	]
	constructor(x) {
		if (Money.validUnits.includes(x.replace(/(\s)+/g, " ").split(" ")[1])) {
			this.unit = x.replace(/(\s)+/g, " ").split(" ")[1]
		} else {
			this.unit = "Invalid Unit"
		}
		this.number = x.replace(/(\s)+/g, " ").split(" ")[0]
	}
}
class Skill {
	constructor(difficulty, metris) {
		this.spectrum = difficulty.split(" ")[0];
		this.difficulty = difficulty.split(" ").splice(1, 1000).join(" ");
		this.metris = metris;
	}
}
class Game {
	constructor(game, subgame) {
		this.game = game;
		this.subgame = subgame
	}
}
class PyAlt {
	static age = "-E10#{#}#^#10";
	static power = "-i";
	static weight = new Weight("1e79284027866 tonne")
	static height = new Height("-27.8i m")
	static money = new Money("-E10##100i TCN")
	static skill = new Skill("Baseline The First Difficulty", 0)
	static livesGotten = 0;
	static iq = "(-₂)i"
	static gpa = "(-₂)i"
	static favoriteGame = new Game("Roblox", "Steal a Brainrot")
	static presence = ["tw.2s4.me", "owot.me"]
	static syndromes = ["all of them"]
	static haters = ["literally everyone"]
	static likes = ["ScrapFan1"]
	static is = {
		furry: true,
		fatherless: true,
		real: false,
	}
	constructor() {
		for (let i of Object.keys(PyAlt)) {
			this[i] = PyAlt[i]
		}
		return this
	}
	actions() {
		return ["beg", "say nonsense"]
	}
	beg() {
		return "--- Please wait for your action to be executed. ---"
	}
	names() {
		return ["UQisUandQ", "py_alt", "soemoen", "ee", "ayb", "3.1"]
	}
}
