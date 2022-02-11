import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
//import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify(

    {

        theme: {
            themes: {
              light: {
                primary: '#ff0000',
                secondary: '#000000',
                accent: '#ffc107',
                error: '#ff5722',
                warning: '#ff9800',
                info: '#03a9f4',
                success: '#8bc34a'
              },
            },
          },



        }

);
