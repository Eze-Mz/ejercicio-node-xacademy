const passport = require("passport");
const passportJwt = require("passport-jwt");

const SERVER_SECRET = "215468548518485486518586417";

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

//Verificar que el token sea válido
passport.use(
	new JwtStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: SERVER_SECRET,
		},
		(jwtPayload, done) => {
			const user = jwtPayload;
			//agrega el usuario al request
			return done(null, user);
		},
	),
);

const authMiddleware = passport.authenticate("jwt", { session: false });

module.exports = { SERVER_SECRET, authMiddleware };
