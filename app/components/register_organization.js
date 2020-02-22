import React from "react"
import style from "components/css/register.css"
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            place: {},
            isPopupOpen: false,
            error: ""
        }
    }

    onClickHandler(event) {
        event.preventDefault();

        const displayNameDom = document.querySelector("#display-name")

        const data = {
            organizer: {
                name: displayNameDom.value,
                displayName: displayNameDom.value,
                description: "default description",
                locationName: this.state.place.name,
                locationLat: this.state.place.location.lat.toString(),
                locationLng: this.state.place.location.lng.toString(),
                locationAddress: this.state.place.address,
                city: this.state.place.city,
                province: this.state.place.province,
                nation: this.state.place.nation
            }
        }

        const isValid = this.validate();

        if(isValid) {
            this.props.onClickListener(data);
        }
    }

    validate() {
        const organizationLocationDom = document.querySelector("#organization-location")
        const displayNameDom = document.querySelector("#display-name")

        if(displayNameDom.value == "") {
            this.setState({
                isPopupOpen: true,
                error: "Display Name cannot be empty"
            })
        }

        if(organizationLocationDom.value == "") {
            this.setState({
                isPopupOpen: true,
                error: "Location cannot be empty"
            })

            return false;
        }

        if(this.state.place == {} || this.state.place.name == undefined || this.state.place.location == undefined) {
            this.setState({
                isPopupOpen: true,
                error: "Location field must be a valid location"
            })

            return false
        }

        return true
    }

    onChangeHandler() {
        this.setState({
            place: {}
        })
    }

    componentDidMount() {
        var input = document.getElementById('organization-location');
        var searchBox = new google.maps.places.SearchBox(input);

        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          var city = ''
          var nation = ''
          var province = ''

          for(var i = 0; i < places[0].address_components.length; i++) {
            if(places[0].address_components[i].types.includes("administrative_area_level_2")) {
                city = places[0].address_components[i].long_name;
            }

            if(places[0].address_components[i].types.includes("administrative_area_level_1")) {
                province = places[0].address_components[i].long_name;
            }

            if(places[0].address_components[i].types.includes("country")) {
                nation = places[0].address_components[i].long_name;
            }
          }

          console.log(places[0]);

          if(places[0].geometry == undefined || places[0].geometry == null) {
            this.setState({
                isPopupOpen: true,
                error: "Organization location must be a valid location"
            })

            return
          }
          
          const place = {
              name: places[0].name,
              location: {
                  lat: places[0].geometry.location.lat(),
                  lng: places[0].geometry.location.lng()
              },
              address: places[0].formatted_address,
              city: city,
              province: province,
              nation: nation
          };

          this.setState({
              place: place
          });

        }.bind(this));
    }

    handleClosePopup() {
        this.setState({
            isPopupOpen: false
        })
    }
    
    render() {
        const isPopupOpen = this.state.isPopupOpen;

        return (
            <div className={style.container}>
                <div className={style.session}>
                    <div className={style.left}>
                    </div>
                    <form action="" className={style.logIn} autocomplete="off"> 
                    <h4>Acara Gereja Dashboard</h4>
                    <p>Welcome! first let us know where your organization located</p>
                    <div className={style.floatingLabel}>
                        <input placeholder="Display Name" type="text" name="display-name" id="display-name" autocomplete="off"/>
                        <input onChange={this.onChangeHandler.bind(this)} placeholder="Location" type="text" name="organization-location" id="organization-location" autocomplete="off"/>
                        <div className={style.icon}>
                        </div>
                    </div>
                    <button onClick={this.onClickHandler.bind(this)} className={style.login}>Next</button>
                    </form>
                </div>

                <Dialog
                    open={isPopupOpen}
                    onClose={this.handleClosePopup.bind(this)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{this.state.error}</DialogTitle>
                        <DialogContent>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClosePopup.bind(this)} color="primary">
                            Ok
                        </Button>
                        </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default Register;