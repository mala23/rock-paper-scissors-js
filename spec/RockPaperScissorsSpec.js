describe("Player", function() {

	beforeEach(function(){
		player = new Player();
		rock = new Rock();
		scissors = new Scissors();
	});

	it("should have a gesture", function() {
		expect(player.gesture(rock)).toBe(rock);
	});

});

describe("rules", function() {

	it("a rock should beat scissors", function(){
		expect(player.gesture(rock)).toBeat(scissors);
	});
});