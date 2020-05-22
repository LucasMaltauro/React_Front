import React , {Component} from 'react';



class AccountSettings extends React.Component{
    render(){
        return(
            <div>
                <div class="layout layout-nav-top">
                    <div class="navbar navbar-expand-lg sticky-top">
                        <a class="navbar-brand" href="home.html">
                            <img alt="Logo" src="assets\img\cardBe.png" width="100" height="30" />
                        </a>        
                    <div class="collapse navbar-collapse justify-content-between" id="navbar-collapse" styles="border-color:#61B8A2; background-color: #393B39;">
                        <ul class="navbar-nav">
                            <li class="nav nav-fill" role="tablist">
                            <a class="nav-link" href="Home.html">Home</a>
                            <a class="nav-link" href="error-report.html">Error Report</a>
                            <a class="nav-link" href="about.html">About</a>
                            </li>
                        </ul>
                    <div class="d-lg-flex align-items-center">
                        <form class="form-inline my-lg-0 my-2">
                        <div class="input-group input-group-dark input-group-round">
                            <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="material-icons" styles="color: #61B8A2;">search</i>
                            </span>
                        </div>
                    <input type="search" class="form-control form-control-dark" placeholder="Search" aria-label="Search app" styles="color: #61B8A2;" styles="background-color: #393B39;" />
                </div>
            </form>
            <div class="dropdown mx-lg-2" styles="color: #61B8A2;">
              <button class="btn btn-primary btn-block dropdown-toggle" type="button" id="newContentButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" styles="background-color: #393B39; color: #61B8A2;">
                Add New
              </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="create-board.html">Board</a>
              <a class="dropdown-item" data-toggle="modal" data-target="#team-add-modal">Team</a>
              </div>
            </div>
            <div class="d-none d-lg-block">
              <div class="dropdown">
                <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt="Image" src="assets\img\avatar-male-4.jpg" class="avatar" />
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a href="account-settings.html" class="dropdown-item">Account Settings</a>
                  <a href="index.html" class="dropdown-item"  styles="color: rgb(219, 41, 41);">Log Out</a>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <form class="modal fade" id="team-add-modal" tabindex="-1" aria-hidden="true" >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header" styles="background-color: #393B39;">
              <h5 class="modal-title" styles="background-color: #393B39;">New Team</h5>
              <button type="button" class="close btn btn-round" data-dismiss="modal" aria-label="Close">
                <i class="material-icons">close</i>
              </button>
            </div>
            {/* <!--end of modal head--> */}
            <ul class="nav nav-tabs nav-fill" role="tablist">
            </ul>
            <div class="modal-body">
              <div class="tab-content">
                <div class="tab-pane fade show active" id="team-add-details" role="tabpanel">
                  <div class="form-group row align-items-center">
                    <label class="col-3" styles="color: black;">Title</label>
                    <input class="form-control col" type="text" placeholder="Team name" name="team-name" styles="background-color: white;" />
                  </div>
                  <div class="users-manage" data-filter-list="form-group-users">
                    <div class="mb-3">
                      <ul class="avatars text-center">

                        <li>
                          <img alt="Claire Connors" src="assets\img\avatar-female-1.jpg" class="avatar" data-toggle="tooltip" data-title="Claire Connors" />
                        </li>

                        <li>
                          <img alt="Marcus Simmons" src="assets\img\avatar-male-1.jpg" class="avatar" data-toggle="tooltip" data-title="Marcus Simmons" />
                        </li>

                        <li>
                          <img alt="Peggy Brown" src="assets\img\avatar-female-2.jpg" class="avatar" data-toggle="tooltip" data-title="Peggy Brown" />
                        </li>

                        <li>
                          <img alt="Harry Xai" src="assets\img\avatar-male-2.jpg" class="avatar" data-toggle="tooltip" data-title="Harry Xai" />
                        </li>

                      </ul>
                    </div>
                    <div class="input-group input-group-round">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="material-icons">filter_list</i>
                        </span>
                      </div>
                      <input type="search" class="form-control filter-list-input" styles="color: #61B8A2;"  placeholder="Filter members" aria-label="Filter Members" />
                    </div>
                    <div class="form-group-users">

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-1" checked="" />
                        <label class="custom-control-label" for="user-manage-1">
                          <span class="d-flex align-items-center">
                            <img alt="Claire Connors" src="assets\img\avatar-female-1.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Claire Connors</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-2" checked="" />
                        <label class="custom-control-label" for="user-manage-2">
                          <span class="d-flex align-items-center">
                            <img alt="Marcus Simmons" src="assets\img\avatar-male-1.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Marcus Simmons</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-3" checked="" />
                        <label class="custom-control-label" for="user-manage-3">
                          <span class="d-flex align-items-center">
                            <img alt="Peggy Brown" src="assets\img\avatar-female-2.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Peggy Brown</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-4" checked="" />
                        <label class="custom-control-label" for="user-manage-4">
                          <span class="d-flex align-items-center">
                            <img alt="Harry Xai" src="assets\img\avatar-male-2.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Harry Xai</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-5" />
                        <label class="custom-control-label" for="user-manage-5">
                          <span class="d-flex align-items-center">
                            <img alt="Sally Harper" src="assets\img\avatar-female-3.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Sally Harper</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-6" />
                        <label class="custom-control-label" for="user-manage-6">
                          <span class="d-flex align-items-center">
                            <img alt="Ravi Singh" src="assets\img\avatar-male-3.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Ravi Singh</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-7" />
                        <label class="custom-control-label" for="user-manage-7">
                          <span class="d-flex align-items-center">
                            <img alt="Kristina Van Der Stroem" src="assets\img\avatar-female-4.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Kristina Van Der Stroem</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-8" />
                        <label class="custom-control-label" for="user-manage-8">
                          <span class="d-flex align-items-center">
                            <img alt="David Whittaker" src="assets\img\avatar-male-4.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">David Whittaker</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-9" />
                        <label class="custom-control-label" for="user-manage-9">
                          <span class="d-flex align-items-center">
                            <img alt="Kerri-Anne Banks" src="assets\img\avatar-female-5.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Kerri-Anne Banks</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-10" />
                        <label class="custom-control-label" for="user-manage-10">
                          <span class="d-flex align-items-center">
                            <img alt="Masimba Sibanda" src="assets\img\avatar-male-5.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Masimba Sibanda</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-11" />
                        <label class="custom-control-label" for="user-manage-11">
                          <span class="d-flex align-items-center">
                            <img alt="Krishna Bajaj" src="assets\img\avatar-female-6.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Krishna Bajaj</span>
                          </span>
                        </label>
                      </div>

                      <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="user-manage-12" />
                        <label class="custom-control-label" for="user-manage-12">
                          <span class="d-flex align-items-center">
                            <img alt="Kenny Tran" src="assets\img\avatar-male-6.jpg" class="avatar mr-2" />
                            <span class="h6 mb-0" data-filter-by="text">Kenny Tran</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--end of modal body--> */}
            <div class="modal-footer">
              <button role="button" class="btn btn-primary" type="submit">
                Done
              </button>
            </div>
          </div>
        </div>
      </form>

      <div class="main-container">
        <div class="container">
          <div class="row justify-content-center mt-5">
            <div class="col-lg-3 mb-3">
              <ul class="nav nav-tabs flex-lg-column" role="tablist" styles="background-color: black;">
                <li class="nav-item">
                  <a class="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true" styles="color: #61B8A2;">Your Profile</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="password-tab" data-toggle="tab" href="#password" role="tab" aria-controls="password" aria-selected="false" styles="color: #61B8A2;">Password</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="notifications-tab" data-toggle="tab" href="#notifications" role="tab" aria-controls="notifications" aria-selected="false" styles="color: #61B8A2;">Notifications</a>
                </li>
              </ul>
            </div>
            <div class="col-xl-8 col-lg-9">
              <div class="card">
                <div class="card-body">
                  <div class="tab-content">
                    <div class="tab-pane fade show active" role="tabpanel" id="profile">
                      <div class="media mb-4">
                        <img alt="Image" src="assets\img\avatar-male-4.jpg" class="avatar avatar-lg" />
                        <div class="media-body ml-3">
                          <div class="custom-file custom-file-naked d-block mb-1">
                            <input type="file" class="custom-file-input d-none" id="avatar-file" />
                            <label class="custom-file-label position-relative" for="avatar-file">
                              <span class="btn btn-primary" styles="background-color: #A5D5AB; color: black;">
                                Upload avatar
                              </span>
                            </label>
                          </div>
                          <small styles="color: #E8EFC3;">For best results, use an image at least 256px by 256px in either .jpg or .png format</small>
                        </div>
                      </div>
                      {/* <!--end of avatar--> */}
                      <form>
                        <div class="form-group row align-items-center">
                          <label class="col-3" styles="color: #E8EFC3;">First Name</label>
                          <div class="col">
                            <input type="text" placeholder="First name" value="David" name="profile-first-name" class="form-control" required="" styles="background-color: #393B39; color: #D7E868;" />
                          </div>
                        </div>
                        <div class="form-group row align-items-center">
                          <label class="col-3" styles="color: #E8EFC3;">Last Name</label>
                          <div class="col">
                            <input type="text" placeholder="First name" value="Whittaker" name="profile-last-name" class="form-control" required="" styles="background-color: #393B39; color: #D7E868;" />
                          </div>
                        </div>
                        <div class="form-group row align-items-center">
                          <label class="col-3" styles="color: #E8EFC3;">Nickname</label>
                          <div class="col">
                            <input type="text" placeholder="Nickname" value="davidwhittaker" name="profile-last-name" class="form-control" styles="background-color: #393B39; color: #D7E868;" />
                          </div>
                        </div>
                        <div class="form-group row align-items-center">
                          <label class="col-3" styles="color: #E8EFC3;">E-mail</label>
                          <div class="col">
                            <input type="email" placeholder="Enter your email address" name="profile-email" class="form-control" required="" styles="background-color: #393B39; color: #D7E868;" />
                          </div>
                        </div>
                        <div class="row justify-content-end">
                          <button type="submit" class="btn btn-primary" styles="background-color: #A5D5AB; color: #393B39;">Save</button>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="password">
                      <form>
                        <div class="form-group row align-items-center">
                          <label class="col-3" styles="color: #E8EFC3;">Current Password</label>
                          <div class="col">
                            <input type="password" placeholder="Enter your current password" name="password-current" class="form-control" styles="background-color: #393B39; color: #D7E868;" />
                          </div>
                        </div>
                        <div class="form-group row align-items-center">
                          <label class="col-3" styles="color: #E8EFC3;">New Password</label>
                          <div class="col">
                            <input type="password" placeholder="Enter a new password" name="password-new" class="form-control" styles="background-color: #393B39; color: #D7E868;" />
                            <small styles="color: #E8EFC3;">Password must be at least 8 characters long</small>
                          </div>
                        </div>
                        <div class="form-group row align-items-center">
                          <label class="col-3" styles="color: #E8EFC3;">Confirm Password</label>
                          <div class="col">
                            <input type="password" placeholder="Confirm your new password" name="password-new-confirm" class="form-control" styles="background-color: #393B39; color: #D7E868;" />
                          </div>
                        </div>
                        <div class="row justify-content-end">
                          <button type="submit" class="btn btn-primary" styles="background-color: #A5D5AB; color: #393B39;">Change Password</button>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="notifications">
                      <form>
                        <div class="form-group">
                          <div class="custom-control custom-checkbox custom-checkbox-switch">
                            <input type="checkbox" class="custom-control-input" id="notify-1" checked="" />
                            <label class="custom-control-label" for="notify-1" styles="color: #A5D5AB;">Active Notifications</label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="billing">
                      <form>
                        <h6>Plan Details</h6>
                        <div class="card text-center">
                          <div class="card-body">
                            <div class="row">
                              <div class="col">
                                <div class="mb-4">
                                  <h6>Free</h6>
                                  <h5 class="display-4 d-block mb-2 font-weight-normal">$0</h5>
                                  <span class="text-muted text-small">Per User / Per Month</span>
                                </div>
                                <ul class="list-unstyled">
                                  <li>
                                    Unlimited projects
                                  </li>
                                  <li>
                                    1 team
                                  </li>
                                  <li>
                                    4 team members
                                  </li>
                                </ul>
                                <div class="custom-control custom-radio d-inline-block">
                                  <input type="radio" id="plan-radio-1" name="customRadio" class="custom-control-input" />
                                  <label class="custom-control-label" for="plan-radio-1"></label>
                                </div>
                              </div>
                              <div class="col">
                                <div class="mb-4">
                                  <h6>Pro</h6>
                                  <h5 class="display-4 d-block mb-2 font-weight-normal">$10</h5>
                                  <span class="text-muted text-small">Per User / Per Month</span>
                                </div>
                                <ul class="list-unstyled">
                                  <li>
                                    Unlimited projects
                                  </li>
                                  <li>
                                    Unlmited teams
                                  </li>
                                  <li>
                                    Unlimited team members
                                  </li>
                                </ul>
                                <div class="custom-control custom-radio d-inline-block">
                                  <input type="radio" id="plan-radio-2" name="customRadio" class="custom-control-input" checked="" />
                                  <label class="custom-control-label" for="plan-radio-2"></label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <form class="mt-4">
                        <h6>Payment Method</h6>

                        <div class="card">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-auto">
                                <div class="custom-control custom-radio d-inline-block">
                                  <input type="radio" id="method-radio-1" name="payment-method" class="custom-control-input" checked="" />
                                  <label class="custom-control-label" for="method-radio-1"></label>
                                </div>
                              </div>
                              <div class="col-auto">
                                <img alt="Image" src="assets\img\logo-payment-visa.svg" class="avatar rounded-0" />
                              </div>
                              <div class="col d-flex align-items-center">
                                <span>•••• •••• •••• 8372</span>
                                <small class="ml-2">Exp: 06/21</small>
                              </div>
                              <div class="col-auto">
                                <button class="btn btn-sm btn-danger">
                                  Remove Card
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-auto">
                                <div class="custom-control custom-radio d-inline-block">
                                  <input type="radio" id="method-radio-2" name="payment-method" class="custom-control-input" />
                                  <label class="custom-control-label" for="method-radio-2"></label>
                                </div>
                              </div>
                              <div class="col-auto">
                                <img alt="Image" src="assets\img\logo-payment-amex.svg" class="avatar rounded-0" />
                              </div>
                              <div class="col d-flex align-items-center">
                                <span>•••• •••• •••• 9918</span>
                                <small class="ml-2">Exp: 02/20</small>
                              </div>
                              <div class="col-auto">
                                <button class="btn btn-sm btn-danger">
                                  Remove Card
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-body">
                            <div class="row align-items-center">
                              <div class="col-auto">
                                <div class="custom-control custom-radio d-inline-block">
                                  <input type="radio" id="method-radio-3" name="payment-method" class="custom-control-input" />
                                  <label class="custom-control-label" for="method-radio-3"></label>
                                </div>
                              </div>
                              <div class="col-auto">
                                <img alt="Image" src="assets\img\logo-payment-paypal.svg" class="avatar rounded-0" />
                              </div>
                              <div class="col d-flex align-items-center">
                                <span>david.whittaker@pipeline.io</span>

                              </div>
                              <div class="col-auto">
                                <button class="btn btn-sm btn-primary">
                                  Manage account
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>

                      </form>
                    </div>
                    <div class="tab-pane fade" role="tabpanel" id="integrations">

                      <div class="card">
                        <div class="card-body">
                          <div class="row align-items-center">
                            <div class="col">
                              <div class="media align-items-center">
                                <img alt="Image" src="assets\img\logo-integration-slack.svg" />
                                <div class="media-body ml-2">
                                  <span class="h6 mb-0 d-block">Slack</span>
                                  <span class="text-small text-muted">Permissions: Read, Write, Comment</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <button class="btn btn-sm btn-danger">
                                Revoke
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-body">
                          <div class="row align-items-center">
                            <div class="col">
                              <div class="media align-items-center">
                                <img alt="Image" src="assets\img\logo-integration-dropbox.svg" />
                                <div class="media-body ml-2">
                                  <span class="h6 mb-0 d-block">Dropbox</span>
                                  <span class="text-small text-muted">Permissions: Read, Write, Upload</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <button class="btn btn-sm btn-danger">
                                Revoke
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-body">
                          <div class="row align-items-center">
                            <div class="col">
                              <div class="media align-items-center">
                                <img alt="Image" src="assets\img\logo-integration-drive.svg" />
                                <div class="media-body ml-2">
                                  <span class="h6 mb-0 d-block">Google Drive</span>
                                  <span class="text-small text-muted">Permissions: Read, Write</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <button class="btn btn-sm btn-danger">
                                Revoke
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card">
                        <div class="card-body">
                          <div class="row align-items-center">
                            <div class="col">
                              <div class="media align-items-center">
                                <img alt="Image" src="assets\img\logo-integration-trello.svg" />
                                <div class="media-body ml-2">
                                  <span class="h6 mb-0 d-block">Trello</span>
                                  <span class="text-small text-muted">Permissions: Read, Write</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-auto">
                              <button class="btn btn-sm btn-danger">
                                Revoke
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
        )
    }

}

export default AccountSettings