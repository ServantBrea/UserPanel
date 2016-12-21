class RPGUser {
    private user:User; 

	constructor() {
		this.user = new User("account","password","Player");
		var hero = new Hero("d1_png","法师",6,15,35) 
		var arm1 = new Arms("pileum_png","黑暗大法师头冠",30)
		var arm2 = new Arms("rod_png","黑暗大法师法杖",45)
		var jewel1 = new Jewel("shuijing_png","水晶",10)
		var jewel2 = new Jewel("baoshi_png","宝石",20)
		var jewel3 = new Jewel("zuanshi_png","钻石",30)
		arm1.addJewel(jewel1);
		arm1.addJewel(jewel2);
        arm2.addJewel(jewel3);
		hero.addArms(arm1);
		hero.addArms(arm2);

		this.user.addHeros(hero);
	}

	getUser(){
		return this.user;
	}
}