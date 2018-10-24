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

import { AlfrescoApiClient } from '../../../alfrescoApiClient';
import { Error } from '../model/RatingEntry';
import { SearchRequest } from '../model/SearchRequest';
import { ResultSetPaging } from '../model/ResultSetPaging';

/**
 * Search service.
 * @module api/SearchApi
 * @version 1
 */

/**
 * Constructs a new SearchApi.
 * @alias module:api/SearchApi
 * @class
 * @param {module:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class SearchApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Callback function to receive the result of the search operation.
     * @callback module:api/SearchApi~searchCallback
     * @param {string} error Error message, if any.
     * @param {module:model/ResultSetPaging} data The data returned by the service call.
     * @param {string} response The complete HTTP response.
     */

    /**
     * Searches Alfresco
     * @param {module:model/SearchRequest} SearchRequest Generic query API
     * @param {module:api/SearchApi~searchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResultSetPaging}
     */
    search = function (SearchRequest) {
        let postBody = SearchRequest;

        // verify the required parameter 'SearchRequest' is set
        if (SearchRequest == undefined || SearchRequest == null) {
            throw new Error("Missing the required parameter 'SearchRequest' when calling search");
        }


        var pathParams = {};
        var queryParams = {};
        var headerParams = {};
        var formParams = {};

        var authNames = ['basicAuth'];
        var contentTypes = [this.apiClient.contentTypes.json];
        var accepts = [this.apiClient.contentTypes.json];
        var returnType = ResultSetPaging;

        return this.apiClient.callApi(
            '/search', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType
        );
    }
}
