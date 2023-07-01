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

const userAuthenticatedMDW = passport.authenticate("jwt", { session: false });

const userIsAdminMDW = (req, res, next) => {
	return passport.authenticate("jwt", { session: false }, (err, user, info) => {
		if (err) {
			console.err(err);
			return next(err);
		}

		if (user.role === "ADMIN") {
			req.user = user;
			return next();
		}

		res.status(401).json({ error: "User not Admin" });
	})(req, res, next);
};

module.exports = { SERVER_SECRET, userAuthenticatedMDW, userIsAdminMDW };
