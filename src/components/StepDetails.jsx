import React, { useState, useEffect } from "react";

export default function StepDetails({ step, selectedSubStep, setSelectedSubStep, formData, setFormData }) {
  const [editMode, setEditMode] = useState(false);

  // Estados para el subpaso 7 (Business Licenses)
  const [licenseEditMode, setLicenseEditMode] = useState(false);
  const [tempOption, setTempOption] = useState(null);

  // Resetear estados de edición de licencias al cambiar de subpaso
  useEffect(() => {
    if (step?.title === "Fundability Foundation" && selectedSubStep === 7) {
      setLicenseEditMode(!formData.licenseRequired);
      setTempOption(formData.licenseRequired || null);
    }
  }, [selectedSubStep, step, formData.licenseRequired]);

  if (!step) return null;

  // Vista detallada de subpaso
  if (selectedSubStep !== null) {
    const subStep = step.details[selectedSubStep];

    // Vista personalizada para el subpaso 0 del paso 1
    if (step.title === "Fundability Foundation" && selectedSubStep === 0) {
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6 relative">
            {/* Botón editar */}
            {!editMode && (
              <button
                className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setEditMode(true)}
              >
                Editar
              </button>
            )}
            <div>
              <div className="text-green-700 font-bold text-2xl">Foundation</div>
              <div className="text-gray-700 font-semibold text-lg uppercase tracking-wide mt-1">Business Address</div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg p-4">
              <div className="bg-green-600 text-white rounded-lg p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
              </div>
              <div>
                <div className="text-green-700 font-bold">YOUR HOME BUSINESS ADDRESS IS RECORDED AS FOLLOWS:</div>
                <div className="text-gray-700 text-sm mt-1">Update your business address with Fundability, the Secretary of State and the IRS if your business address changes.</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {/* Modo edición */}
              {editMode ? (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Name</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.businessName}
                      onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Address Line 1</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">City</div>
                      <input
                        className="bg-gray-50 rounded p-3 w-full border"
                        value={formData.city}
                        onChange={e => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">State</div>
                      <input
                        className="bg-gray-50 rounded p-3 w-full border"
                        value={formData.state}
                        onChange={e => setFormData({ ...formData, state: e.target.value })}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">Zip Code</div>
                      <input
                        className="bg-gray-50 rounded p-3 w-full border"
                        value={formData.zip}
                        onChange={e => setFormData({ ...formData, zip: e.target.value })}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Name</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.businessName}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Address Line 1</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.address}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">City</div>
                      <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                        <span>{formData.city}</span>
                        <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">State</div>
                      <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                        <span>{formData.state}</span>
                        <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 font-semibold">Zip Code</div>
                      <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                        <span>{formData.zip}</span>
                        <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {editMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setEditMode(false)}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={selectedSubStep === step.details.length - 1}
                  >
                    Next: Business Entity
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista personalizada para el subpaso 1 del paso 1
    if (step.title === "Fundability Foundation" && selectedSubStep === 1) {
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6 relative">
            {/* Botón editar */}
            {!editMode && (
              <button
                className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setEditMode(true)}
              >
                Editar
              </button>
            )}
            <div>
              <div className="text-green-700 font-bold text-2xl">Foundation</div>
              <div className="text-gray-700 font-semibold text-lg uppercase tracking-wide mt-1">Business Entity</div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg p-4">
              <div className="bg-green-600 text-white rounded-lg p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
              </div>
              <div>
                <div className="text-green-700 font-bold">GREAT, YOUR BUSINESS ENTITY IS RECORDED AS FOLLOWS:</div>
                <div className="text-gray-700 text-sm mt-1">To make changes, click "Update Entity Information".</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {editMode ? (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Entity Type</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.entityType}
                      onChange={e => setFormData({ ...formData, entityType: e.target.value })}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Entity Registration State</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.entityState}
                      onChange={e => setFormData({ ...formData, entityState: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Entity Type</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.entityType}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Entity Registration State</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.entityState}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {editMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setEditMode(false)}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={selectedSubStep === step.details.length - 1}
                  >
                    Next: Foreign Filing
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista detallada de subpaso 3 (Ownership)
    if (step.title === "Fundability Foundation" && selectedSubStep === 3) {
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6 relative">
            {/* Botón editar */}
            {!editMode && (
              <button
                className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setEditMode(true)}
              >
                Editar
              </button>
            )}
            <div>
              <div className="text-green-700 font-bold text-2xl">Foundation</div>
              <div className="text-gray-700 font-semibold text-lg uppercase tracking-wide mt-1">Ownership</div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg p-4">
              <div className="bg-green-600 text-white rounded-lg p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
              </div>
              <div>
                <div className="text-green-700 font-bold">YOUR OWNERSHIP INFORMATION IS RECORDED AS FOLLOWS:</div>
                <div className="text-gray-700 text-sm mt-1">To make changes, click "Update Ownership".</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {editMode ? (
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold">Business Owner</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.owner || ""}
                      onChange={e => setFormData({ ...formData, owner: e.target.value })}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold">Ownership</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.ownership || ""}
                      onChange={e => setFormData({ ...formData, ownership: e.target.value })}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold">Credit score</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.creditScore || ""}
                      onChange={e => setFormData({ ...formData, creditScore: e.target.value })}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold">Business Owner</div>
                    <div className="bg-gray-50 rounded p-3">{formData.owner || "Joel Carrasco Rodriguez"}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold">Ownership</div>
                    <div className="bg-gray-50 rounded p-3">{formData.ownership || "100 %"}</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-500 font-semibold">Credit score</div>
                    <div className="bg-gray-50 rounded p-3 text-gray-400">{formData.creditScore || ""}</div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {editMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setEditMode(false)}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={selectedSubStep === step.details.length - 1}
                  >
                    Next: EIN
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista detallada de subpaso 4 (EIN)
    if (step.title === "Fundability Foundation" && selectedSubStep === 4) {
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6 relative">
            {/* Botón editar */}
            {!editMode && (
              <button
                className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setEditMode(true)}
              >
                Editar
              </button>
            )}
            <div>
              <div className="text-green-700 font-bold text-2xl">Foundation</div>
              <div className="text-gray-700 font-semibold text-lg uppercase tracking-wide mt-1">EIN</div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg p-4">
              <div className="bg-green-600 text-white rounded-lg p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
              </div>
              <div>
                <div className="text-green-700 font-bold">GREAT, YOUR EIN IS RECORDED AS FOLLOWS:</div>
                <div className="text-gray-700 text-sm mt-1">To make changes, click "Update EIN".</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {editMode ? (
                <div>
                  <div className="text-xs text-gray-500 font-semibold">EIN</div>
                  <input
                    className="bg-gray-50 rounded p-3 w-full border"
                    value={formData.ein || ""}
                    onChange={e => setFormData({ ...formData, ein: e.target.value })}
                  />
                </div>
              ) : (
                <div>
                  <div className="text-xs text-gray-500 font-semibold">EIN</div>
                  <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                    <span>{formData.ein || "99-4239504"}</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {editMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setEditMode(false)}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={selectedSubStep === step.details.length - 1}
                  >
                    Next: Business Phone
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista detallada de subpaso 5 (Business Phone)
    if (step.title === "Fundability Foundation" && selectedSubStep === 5) {
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6 relative">
            {/* Botón editar */}
            {!editMode && (
              <button
                className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setEditMode(true)}
              >
                Editar
              </button>
            )}
            <div>
              <div className="text-green-700 font-bold text-2xl">Foundation</div>
              <div className="text-gray-700 font-semibold text-lg uppercase tracking-wide mt-1">Business Phone</div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg p-4">
              <div className="bg-green-600 text-white rounded-lg p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
              </div>
              <div>
                <div className="text-green-700 font-bold">YOUR BUSINESS NUMBER IS RECORDED AS FOLLOWS:</div>
                <div className="text-gray-700 text-sm mt-1">To update your business numbers, click "Update Phone Number".</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {editMode ? (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Phone Number</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.businessPhone || ""}
                      onChange={e => setFormData({ ...formData, businessPhone: e.target.value })}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Service Provider</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.serviceProvider || ""}
                      onChange={e => setFormData({ ...formData, serviceProvider: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Phone Number</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.businessPhone || "615-527-6890"}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Service Provider</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.serviceProvider || "Phone.com"}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {editMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setEditMode(false)}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={selectedSubStep === step.details.length - 1}
                  >
                    Next: Website and Email
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista detallada de subpaso 6 (Website and Email)
    if (step.title === "Fundability Foundation" && selectedSubStep === 6) {
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6 relative">
            {/* Botón editar */}
            {!editMode && (
              <button
                className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setEditMode(true)}
              >
                Editar
              </button>
            )}
            <div>
              <div className="text-green-700 font-bold text-2xl">Foundation</div>
              <div className="text-gray-700 font-semibold text-lg uppercase tracking-wide mt-1">Website and Email</div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg p-4">
              <div className="bg-green-600 text-white rounded-lg p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
              </div>
              <div>
                <div className="text-green-700 font-bold">YOUR WEBSITE AND EMAIL ARE RECORDED AS FOLLOWS:</div>
                <div className="text-gray-700 text-sm mt-1">To make changes, click "Update Website or Email" below.</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {editMode ? (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Website</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.businessWebsite || ""}
                      onChange={e => setFormData({ ...formData, businessWebsite: e.target.value })}
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Email</div>
                    <input
                      className="bg-gray-50 rounded p-3 w-full border"
                      value={formData.businessEmail || ""}
                      onChange={e => setFormData({ ...formData, businessEmail: e.target.value })}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Website</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.businessWebsite || "www.thegambitman.com"}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-semibold">Business Email</div>
                    <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                      <span>{formData.businessEmail || "joel@thegambitman.com"}</span>
                      <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {editMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setEditMode(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setEditMode(false)}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={selectedSubStep === step.details.length - 1}
                  >
                    Next: Business Licenses
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista detallada de subpaso 7 (Business Licenses)
    if (step.title === "Fundability Foundation" && selectedSubStep === 7) {
      const handleSelect = (option) => {
        setTempOption(option);
      };
      const handleSave = () => {
        setFormData({ ...formData, licenseRequired: tempOption });
        setLicenseEditMode(false);
      };
      const handleEdit = () => {
        setLicenseEditMode(true);
        setTempOption(formData.licenseRequired || null);
      };
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-4 bg-blue-50 rounded-lg p-4">
                <div className="bg-blue-700 text-white rounded-lg p-3 flex items-center justify-center">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
                </div>
                <div>
                  <div className="text-blue-900 font-bold">DOES YOUR BUSINESS REQUIRE A LICENSE?</div>
                  <div className="text-gray-700 text-sm mt-1">If your business requires a license from the city, county or state that you operate it, be sure that it is up to date and that the address on your license matches your Fundability Business address.</div>
                </div>
              </div>
              <div className="mt-4 text-gray-700">
                If your business requires a state license, your secretary of state will tell you if a license is required when you set up your entity. For city and county, you will need to call your city or county to determine if your business is required to have a license.
              </div>
            </div>
            <div className="flex gap-8 mt-6">
              <button
                className={`flex-1 border rounded-lg p-6 flex flex-col items-center gap-2 ${tempOption === 'yes' ? 'border-blue-700 bg-blue-50' : 'border-gray-200 bg-white'} hover:border-blue-700`}
                onClick={() => licenseEditMode && handleSelect('yes')}
                disabled={!licenseEditMode}
              >
                <span className="text-2xl">📝</span>
                <span className="font-semibold">Yes License(s) required</span>
              </button>
              <button
                className={`flex-1 border rounded-lg p-6 flex flex-col items-center gap-2 ${tempOption === 'no' ? 'border-blue-700 bg-blue-50' : 'border-gray-200 bg-white'} hover:border-blue-700`}
                onClick={() => licenseEditMode && handleSelect('no')}
                disabled={!licenseEditMode}
              >
                <span className="text-2xl">📄</span>
                <span className="font-semibold">No license required</span>
              </button>
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {licenseEditMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className={`px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ${!tempOption ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={handleSave}
                    disabled={!tempOption}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={handleEdit}
                  >
                    Editar
                  </button>
                  <button
                    className={`px-4 py-2 rounded text-white ${formData.licenseRequired ? 'bg-green-600 hover:bg-green-700' : 'bg-green-100 cursor-not-allowed'}`}
                    onClick={() => formData.licenseRequired && setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={!formData.licenseRequired || selectedSubStep === step.details.length - 1}
                  >
                    Next
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista detallada de subpaso 8 (Business Bank Account)
    if (step.title === "Fundability Foundation" && selectedSubStep === 8) {
      const [editBankMode, setEditBankMode] = useState(false);
      const [tempBank, setTempBank] = useState(formData.bankName || "Bank Of America");
      useEffect(() => {
        setEditBankMode(false);
        setTempBank(formData.bankName || "Bank Of America");
      }, [selectedSubStep]);
      const handleSave = () => {
        setFormData({ ...formData, bankName: tempBank });
        setEditBankMode(false);
      };
      return (
        <div className="flex-1">
          <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-6 relative">
            {/* Botón editar */}
            {!editBankMode && (
              <button
                className="absolute top-4 right-4 px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                onClick={() => setEditBankMode(true)}
              >
                Editar
              </button>
            )}
            <div>
              <div className="text-green-700 font-bold text-2xl">Financials</div>
              <div className="text-gray-700 font-semibold text-lg uppercase tracking-wide mt-1">Business Bank Account</div>
            </div>
            <div className="flex items-center gap-4 bg-green-50 rounded-lg p-4">
              <div className="bg-green-600 text-white rounded-lg p-3 flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.74 7.36 10.97a1 1 0 0 0 1.28 0C13.95 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 18.54C9.14 18.07 5 14.61 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.61-4.14 7.07-7 9.54ZM12 6a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
              </div>
              <div>
                <div className="text-green-700 font-bold">YOUR BUSINESS BANK ACCOUNT IS RECORDED AS FOLLOWS:</div>
                <div className="text-gray-700 text-sm mt-1">Click "Update Bank Account" to make changes.</div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {editBankMode ? (
                <div>
                  <div className="text-xs text-gray-500 font-semibold">Bank Name</div>
                  <input
                    className="bg-gray-50 rounded p-3 w-full border"
                    value={tempBank}
                    onChange={e => setTempBank(e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <div className="text-xs text-gray-500 font-semibold">Bank Name</div>
                  <div className="bg-gray-50 rounded p-3 flex items-center justify-between">
                    <span>{formData.bankName || "Bank Of America"}</span>
                    <button className="ml-2 text-gray-400 hover:text-gray-600" title="Copy"><svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6.83A2 2 0 0 0 14.83 6L11 2.17A2 2 0 0 0 9.17 2H7Zm0 2h2.17L15 7.83V14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4Zm2 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg></button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2 mt-6 justify-end">
              {editBankMode ? (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setEditBankMode(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={handleSave}
                  >
                    Guardar
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setSelectedSubStep(null)}
                  >
                    Volver a la lista
                  </button>
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
                    disabled={selectedSubStep === step.details.length - 1}
                  >
                    Next: Merchant Account
                    <span className="ml-2">&rarr;</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }

    // Vista genérica para otros subpasos
    return (
      <div className="flex-1">
        <div className="p-4 bg-white rounded-lg shadow flex flex-col gap-4">
          <div className="text-green-600 font-bold text-lg">{step.title}</div>
          <div className="text-gray-700 font-semibold text-xl">{subStep.label}</div>
          <div className="text-gray-500">Estado: {subStep.status}</div>
          {/* Aquí irá la información específica de cada subpaso */}
          <div className="flex gap-2 mt-6">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setSelectedSubStep(null)}
            >
              Volver a la lista
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => setSelectedSubStep((prev) => Math.max(0, prev - 1))}
              disabled={selectedSubStep === 0}
            >
              Anterior
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => setSelectedSubStep((prev) => Math.min(step.details.length - 1, prev + 1))}
              disabled={selectedSubStep === step.details.length - 1}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Vista de lista de subpasos
  return (
    <div className="w-1/2">
      <div className="p-4 bg-white rounded-lg shadow">
        <div className="text-green-600 font-bold text-lg">{step.title}</div>
        <div className="mt-4">
          {step.details.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-between py-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 rounded"
              onClick={() => setSelectedSubStep(i)}
            >
              <span>{item.label}</span>
              <span>
                {item.status === "done" && "✔️"}
                {item.status === "pending" && "⏳"}
                {item.status === "warning" && "⚠️"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
