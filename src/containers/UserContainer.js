import { connect } from 'react-redux';
import _ from 'lodash';

import User from './../components/User';
import { setActiveUserId  } from './../actions/index';

const mapStateToProps = state => ({
    contacts : _.values(state.contacts)
});

const mapDispatchToProps = dispatch => ({
    clickActiveUser : id_user => dispatch(setActiveUserId(id_user))
});


export default connect(mapStateToProps, mapDispatchToProps)(User);