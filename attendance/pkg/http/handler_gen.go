// THIS FILE IS AUTO GENERATED BY GK-CLI DO NOT EDIT!!
package http

import (
	endpoint "github.com/GDGVIT/Project-Hades/attendance/pkg/endpoint"
	http "github.com/go-kit/kit/transport/http"
	http1 "net/http"
)

//  NewHTTPHandler returns a handler that makes a set of endpoints available on
// predefined paths.
func NewHTTPHandler(endpoints endpoint.Endpoints, options map[string][]http.ServerOption) http1.Handler {
	m := http1.NewServeMux()
	makePostAttendanceHandler(m, endpoints, options["PostAttendance"])
	makePostCouponHandler(m, endpoints, options["PostCoupon"])
	makeDeleteCouponHandler(m, endpoints, options["DeleteCoupon"])
	makeUnpostAttendanceHandler(m, endpoints, options["UnpostAttendance"])
	makeViewPresentHandler(m, endpoints, options["ViewPresent"])
	makeViewAbsentHandler(m, endpoints, options["ViewAbsent"])
	return m
}