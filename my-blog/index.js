const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'My Blog';
const Postschema  = require('./lists/post');
const Navschema = require('./lists/nav');
const Aboutschema = require('./lists/about');
const adapterConfig = { mongoUri: 'mongodb+srv://keystone123:keystone123@cluster0.nztgx.mongodb.net/keystonedb?retryWrites=true&w=majority' };


/**
 * You've got a new KeystoneJS Project! Things you might want to do next:
 * - Add adapter config options (See: https://keystonejs.com/keystonejs/adapter-mongoose/)
 * - Select configure access control and authentication (See: https://keystonejs.com/api/access-control)
 */

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});
keystone.createList('Post' , Postschema);
keystone.createList('Navbar' , Navschema);
keystone.createList('AboutUs' , Aboutschema);
module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true })],
};
