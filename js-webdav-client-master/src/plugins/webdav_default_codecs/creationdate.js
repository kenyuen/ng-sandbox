/*
 * Copyright ©2012 SARA bv, The Netherlands
 *
 * This file is part of js-webdav-client.
 *
 * js-webdav-client is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * js-webdav-client is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with js-webdav-client.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";

// If nl.sara.webdav.codec.CreationdateCodec is already defined, we have a namespace clash!
if (nl.sara.webdav.codec.CreationdateCodec !== undefined) {
  throw new nl.sara.webdav.Exception('Namespace nl.sara.webdav.codec.CreationdateCodec already taken, could not load JavaScript library for WebDAV connectivity.', nl.sara.webdav.Exception.NAMESPACE_TAKEN);
}

/**
 * @class Adds a codec that converts DAV: creationdate to a Date object
 * @augments nl.sara.webdav.Codec
 */
nl.sara.webdav.codec.CreationdateCodec = new nl.sara.webdav.Codec();
nl.sara.webdav.codec.CreationdateCodec.namespace = 'DAV:';
nl.sara.webdav.codec.CreationdateCodec.tagname = 'creationdate';

nl.sara.webdav.codec.CreationdateCodec.fromXML = function(nodelist) {
  var node = nodelist.item(0);
  if ((node.nodeType === 3) || (node.nodeType === 4)) { // Make sure text and CDATA content is stored
    return new Date(node.nodeValue);
  }else{ // If the node is not text or CDATA, then we don't parse a value at all
    return null;
  }
};

nl.sara.webdav.codec.CreationdateCodec.toXML = function(value, xmlDoc){
  var cdata = xmlDoc.createCDATASection(value.toISOString());
  xmlDoc.documentElement.appendChild(cdata);
  return xmlDoc;
};

nl.sara.webdav.Property.addCodec(nl.sara.webdav.codec.CreationdateCodec);

// End of file