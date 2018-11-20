/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { CreateTenantRepresentation } from '../model/createTenantRepresentation';
import { ImageUploadRepresentation } from '../model/imageUploadRepresentation';
import { LightTenantRepresentation } from '../model/lightTenantRepresentation';
import { TenantEvent } from '../model/tenantEvent';
import { TenantRepresentation } from '../model/tenantRepresentation';
import { BaseApi } from './base.api';

/**
* Admintenants service.
* @module AdmintenantsApi
*/
export class AdmintenantsApi extends BaseApi {
    /**
    * Create a tenant
    *
    * Only a tenant manager may access this endpoint
    *
    * @param createTenantRepresentation createTenantRepresentation
    * @return Promise<LightTenantRepresentation>
    */
    createTenantUsingPOST(createTenantRepresentation: CreateTenantRepresentation): Promise<LightTenantRepresentation> {

        let postBody = createTenantRepresentation;

        if (createTenantRepresentation === undefined || createTenantRepresentation === null) {
            throw new Error("Required param 'createTenantRepresentation' in createTenantUsingPOST");
        }

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a tenant
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<{}>
        */
    deleteTenantUsingDELETE(tenantId: number): Promise<{}> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in deleteTenantUsingDELETE");
        }

        let pathParams = {
            'tenantId': tenantId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants/{tenantId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get tenant events
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<Array<TenantEvent>>
        */
    getTenantEventsUsingGET(tenantId: number): Promise<Array<TenantEvent>> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getTenantEventsUsingGET");
        }

        let pathParams = {
            'tenantId': tenantId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants/{tenantId}/events', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a tenant's logo
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<{}>
        */
    getTenantLogoUsingGET(tenantId: number): Promise<{}> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getTenantLogoUsingGET");
        }

        let pathParams = {
            'tenantId': tenantId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants/{tenantId}/logo', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a tenant
        *
        *
        *
        * @param tenantId tenantId
        * @return Promise<TenantRepresentation>
        */
    getTenantUsingGET(tenantId: number): Promise<TenantRepresentation> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in getTenantUsingGET");
        }

        let pathParams = {
            'tenantId': tenantId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants/{tenantId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List tenants
        *
        * Only a tenant manager may access this endpoint
        *
        * @return Promise<Array<LightTenantRepresentation>>
        */
    getTenantsUsingGET(): Promise<Array<LightTenantRepresentation>> {

        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update a tenant
        *
        *
        *
        * @param tenantId tenantId
        * @param createTenantRepresentation createTenantRepresentation
        * @return Promise<TenantRepresentation>
        */
    updateUsingPUT(tenantId: number, createTenantRepresentation: CreateTenantRepresentation): Promise<TenantRepresentation> {

        let postBody = createTenantRepresentation;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in updateUsingPUT");
        }

        if (createTenantRepresentation === undefined || createTenantRepresentation === null) {
            throw new Error("Required param 'createTenantRepresentation' in updateUsingPUT");
        }

        let pathParams = {
            'tenantId': tenantId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants/{tenantId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Update a tenant's logo
        *
        *
        *
        * @param tenantId tenantId
        * @param file file
        * @return Promise<ImageUploadRepresentation>
        */
    uploadTenantLogoUsingPOST(tenantId: number, file: Blob): Promise<ImageUploadRepresentation> {

        let postBody = null;

        if (tenantId === undefined || tenantId === null) {
            throw new Error("Required param 'tenantId' in uploadTenantLogoUsingPOST");
        }

        if (file === undefined || file === null) {
            throw new Error("Required param 'file' in uploadTenantLogoUsingPOST");
        }

        let pathParams = {
            'tenantId': tenantId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
            'file': file
        };

        let contentTypes = ['multipart/form-data'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/admin/tenants/{tenantId}/logo', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }

}
