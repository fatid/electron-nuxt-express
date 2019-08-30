
const Cookies = require('js-cookie')
export default {
    computed: {
        isMobile() {
            return this.$route.query.device
                ? this.$route.query.device
                : this.$device.isMobile;
        },
         
    },
 
    methods: {  
    }

}