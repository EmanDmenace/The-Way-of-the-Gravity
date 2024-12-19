const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.Rotate,
		C3.Plugins.Particles,
		C3.Plugins.Text,
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.IsOutsideLayout,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Behaviors.Platform.Acts.SetGravity,
		C3.Plugins.Sprite.Acts.SetFlipped,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Cnds.OnDestroyed,
		C3.Plugins.System.Acts.SetLayoutProjection
	];
};
self.C3_JsPropNameTable = [
	{ScrollTo: 0},
	{Platform: 0},
	{Solid: 0},
	{Player: 0},
	{platform: 0},
	{Coin: 0},
	{ObstacleOne: 0},
	{Keyboard: 0},
	{Rotate: 0},
	{obstacle2: 0},
	{Particles: 0},
	{score: 0},
	{score_number: 0},
	{TiledBackground: 0},
	{Player2: 0},
	{TiledBackground2: 0},
	{back: 0},
	{door: 0},
	{door1subdoor: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{TiledBackground3: 0},
	{MONKEHPORRTA: 0},
	{Sprite3: 0},
	{GOALLALLALALAAAA: 0},
	{TiledBackground4: 0},
	{level2DeathCheck: 0},
	{level1DeathCheck: 0},
	{level3DeathCheck: 0},
	{level4DeathCheck: 0},
	{gravity: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	platform: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	ObstacleOne: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	obstacle2: class extends self.ISpriteInstance {},
	Particles: class extends self.IParticlesInstance {},
	score: class extends self.ITextInstance {},
	score_number: class extends self.ITextInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Player2: class extends self.ISpriteInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	back: class extends self.ITiledBackgroundInstance {},
	door: class extends self.ISpriteInstance {},
	door1subdoor: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	MONKEHPORRTA: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	GOALLALLALALAAAA: class extends self.ISpriteInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	level2DeathCheck: class extends self.ISpriteInstance {},
	level1DeathCheck: class extends self.ISpriteInstance {},
	level3DeathCheck: class extends self.ISpriteInstance {},
	level4DeathCheck: class extends self.ISpriteInstance {}
}