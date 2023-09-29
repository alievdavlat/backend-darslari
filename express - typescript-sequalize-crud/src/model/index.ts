import sequelize from "../config/sequalize.config";
import Comment from "./comments.model";
import SuggUser from "./suggUsers.model";
import Suggestion from "./suggestions.model";
import User from "./users.model";
import UserComment from "./usersComments.model";


User.belongsToMany(Comment, { through: 'UserComment', foreignKey: 'user_id' });
Comment.belongsToMany(User, { through: 'UserComment', foreignKey: 'comment_id' });


User.belongsToMany(Suggestion, { through: 'SuggUser', foreignKey: 'user_id' });
Suggestion.belongsToMany(User, { through: 'SuggUser', foreignKey: 'suggestion_id' });


sequelize.sync({alter:true, force:true})
export {
  User,
  Comment,
  Suggestion,
  SuggUser,
  UserComment
}