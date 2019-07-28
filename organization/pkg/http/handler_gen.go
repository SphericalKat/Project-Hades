// THIS FILE IS AUTO GENERATED BY GK-CLI DO NOT EDIT!!
package http

import (
	endpoint "github.com/GDGVIT/Project-Hades/organization/pkg/endpoint"
	http "github.com/go-kit/kit/transport/http"
	http1 "net/http"
)

//  NewHTTPHandler returns a handler that makes a set of endpoints available on
// predefined paths.
func NewHTTPHandler(endpoints endpoint.Endpoints, options map[string][]http.ServerOption) http1.Handler {
	m := http1.NewServeMux()
	makeLoginHandler(m, endpoints, options["Login"])
	makeSignupHandler(m, endpoints, options["Signup"])
	makeCreateOrgHandler(m, endpoints, options["CreateOrg"])
	makeLoginOrgHandler(m, endpoints, options["LoginOrg"])
	makeAddMembersHandler(m, endpoints, options["AddMembers"])
	makeBulkAddMembersHandler(m, endpoints, options["BulkAddMembers"])
	makeRemoveMembersHandler(m, endpoints, options["RemoveMembers"])
	makeBulkRemoveMembersHandler(m, endpoints, options["BulkRemoveMembers"])
	makeShowProfileHandler(m, endpoints, options["ShowProfile"])
	return m
}