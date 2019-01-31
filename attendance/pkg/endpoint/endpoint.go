package endpoint

import (
	"context"

	service "github.com/GDGVIT/Project-Hades/attendance/pkg/service"
	"github.com/GDGVIT/Project-Hades/model"
	endpoint "github.com/go-kit/kit/endpoint"
)

// PostAttendanceRequest collects the request parameters for the PostAttendance method.
type PostAttendanceRequest struct {
	Details model.Attendance `json:"details"`
}

// PostAttendanceResponse collects the response parameters for the PostAttendance method.
type PostAttendanceResponse struct {
	Rs  string `json:"rs"`
	Err error  `json:"err"`
}

// MakePostAttendanceEndpoint returns an endpoint that invokes PostAttendance on the service.
func MakePostAttendanceEndpoint(s service.AttendanceService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(PostAttendanceRequest)
		rs, err := s.PostAttendance(ctx, req.Details)
		return PostAttendanceResponse{
			Err: err,
			Rs:  rs,
		}, nil
	}
}

// Failed implements Failer.
func (r PostAttendanceResponse) Failed() error {
	return r.Err
}

// PostCouponRequest collects the request parameters for the PostCoupon method.
type PostCouponRequest struct {
	Email  string `json:"email"`
	Coupon string `json:"coupon"`
}

// PostCouponResponse collects the response parameters for the PostCoupon method.
type PostCouponResponse struct {
	Rs  string `json:"rs"`
	Err error  `json:"err"`
}

// MakePostCouponEndpoint returns an endpoint that invokes PostCoupon on the service.
func MakePostCouponEndpoint(s service.AttendanceService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(PostCouponRequest)
		rs, err := s.PostCoupon(ctx, req.Email, req.Coupon)
		return PostCouponResponse{
			Err: err,
			Rs:  rs,
		}, nil
	}
}

// Failed implements Failer.
func (r PostCouponResponse) Failed() error {
	return r.Err
}

// DeleteCouponRequest collects the request parameters for the DeleteCoupon method.
type DeleteCouponRequest struct {
	Email string `json:"email"`
	Event string `json:"event_name"`
}

// DeleteCouponResponse collects the response parameters for the DeleteCoupon method.
type DeleteCouponResponse struct {
	Rs  string `json:"rs"`
	Err error  `json:"err"`
}

// MakeDeleteCouponEndpoint returns an endpoint that invokes DeleteCoupon on the service.
func MakeDeleteCouponEndpoint(s service.AttendanceService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(DeleteCouponRequest)
		rs, err := s.DeleteCoupon(ctx, req.Email, req.Event)
		return DeleteCouponResponse{
			Err: err,
			Rs:  rs,
		}, nil
	}
}

// Failed implements Failer.
func (r DeleteCouponResponse) Failed() error {
	return r.Err
}

// UnpostAttendanceRequest collects the request parameters for the UnpostAttendance method.
type UnpostAttendanceRequest struct {
	Email string `json:"email"`
	Event string `json:"event_name"`
}

// UnpostAttendanceResponse collects the response parameters for the UnpostAttendance method.
type UnpostAttendanceResponse struct {
	Rs  string `json:"rs"`
	Err error  `json:"err"`
}

// MakeUnpostAttendanceEndpoint returns an endpoint that invokes UnpostAttendance on the service.
func MakeUnpostAttendanceEndpoint(s service.AttendanceService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(UnpostAttendanceRequest)
		rs, err := s.UnpostAttendance(ctx, req.Email, req.Event)
		return UnpostAttendanceResponse{
			Err: err,
			Rs:  rs,
		}, nil
	}
}

// Failed implements Failer.
func (r UnpostAttendanceResponse) Failed() error {
	return r.Err
}

// ViewPresentRequest collects the request parameters for the ViewPresent method.
type ViewPresentRequest struct {
	Event string `json:"event_name"`
}

// ViewPresentResponse collects the response parameters for the ViewPresent method.
type ViewPresentResponse struct {
	Rs  []model.Participant `json:"rs"`
	Err error               `json:"err"`
}

// MakeViewPresentEndpoint returns an endpoint that invokes ViewPresent on the service.
func MakeViewPresentEndpoint(s service.AttendanceService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(ViewPresentRequest)
		rs, err := s.ViewPresent(ctx, req.Event)
		return ViewPresentResponse{
			Err: err,
			Rs:  rs,
		}, nil
	}
}

// Failed implements Failer.
func (r ViewPresentResponse) Failed() error {
	return r.Err
}

// ViewAbsentRequest collects the request parameters for the ViewAbsent method.
type ViewAbsentRequest struct {
	Event string `json:"event_name"`
}

// ViewAbsentResponse collects the response parameters for the ViewAbsent method.
type ViewAbsentResponse struct {
	Rs  []model.Participant `json:"rs"`
	Err error               `json:"err"`
}

// MakeViewAbsentEndpoint returns an endpoint that invokes ViewAbsent on the service.
func MakeViewAbsentEndpoint(s service.AttendanceService) endpoint.Endpoint {
	return func(ctx context.Context, request interface{}) (interface{}, error) {
		req := request.(ViewAbsentRequest)
		rs, err := s.ViewAbsent(ctx, req.Event)
		return ViewAbsentResponse{
			Err: err,
			Rs:  rs,
		}, nil
	}
}

// Failed implements Failer.
func (r ViewAbsentResponse) Failed() error {
	return r.Err
}

// Failer is an interface that should be implemented by response types.
// Response encoders can check if responses are Failer, and if so they've
// failed, and if so encode them using a separate write path based on the error.
type Failure interface {
	Failed() error
}

// PostAttendance implements Service. Primarily useful in a client.
func (e Endpoints) PostAttendance(ctx context.Context, details model.Attendance) (rs string, err error) {
	request := PostAttendanceRequest{
		Details: details,
	}
	response, err := e.PostAttendanceEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(PostAttendanceResponse).Rs, response.(PostAttendanceResponse).Err
}

// PostCoupon implements Service. Primarily useful in a client.
func (e Endpoints) PostCoupon(ctx context.Context, email string, coupon string) (rs string, err error) {
	request := PostCouponRequest{
		Coupon: coupon,
		Email:  email,
	}
	response, err := e.PostCouponEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(PostCouponResponse).Rs, response.(PostCouponResponse).Err
}

// DeleteCoupon implements Service. Primarily useful in a client.
func (e Endpoints) DeleteCoupon(ctx context.Context, email string, event string) (rs string, err error) {
	request := DeleteCouponRequest{
		Event: event,
		Email: email,
	}
	response, err := e.DeleteCouponEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(DeleteCouponResponse).Rs, response.(DeleteCouponResponse).Err
}

// UnpostAttendance implements Service. Primarily useful in a client.
func (e Endpoints) UnpostAttendance(ctx context.Context, email string, event string) (rs string, err error) {
	request := UnpostAttendanceRequest{
		Event: event,
		Email: email,
	}
	response, err := e.UnpostAttendanceEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(UnpostAttendanceResponse).Rs, response.(UnpostAttendanceResponse).Err
}

// ViewPresent implements Service. Primarily useful in a client.
func (e Endpoints) ViewPresent(ctx context.Context, Event string) (rs []model.Participant, err error) {
	request := ViewPresentRequest{Event: Event}
	response, err := e.ViewPresentEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(ViewPresentResponse).Rs, response.(ViewPresentResponse).Err
}

// ViewAbsent implements Service. Primarily useful in a client.
func (e Endpoints) ViewAbsent(ctx context.Context, Event string) (rs []model.Participant, err error) {
	request := ViewAbsentRequest{Event: Event}
	response, err := e.ViewAbsentEndpoint(ctx, request)
	if err != nil {
		return
	}
	return response.(ViewAbsentResponse).Rs, response.(ViewAbsentResponse).Err
}
