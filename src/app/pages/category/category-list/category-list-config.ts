import { TableColumn } from "src/@vex/interfaces/table-column.interface";
import { Category } from "src/app/responses/category.response";
import icCategory from "@iconify/icons-ic/twotone-category"

const tableColumns: TableColumn<Category>[] = [
    {
        label:"Nombre",
        property:"name",
        type: "text",
        cssClasses: ['font-medium', 'w-10']
    },
    {
        label:"Descripción",
        property:"description",
        type: "textTruncate",
        cssClasses: ['font-medium', 'w-10']
    },
    {
        label:"F. Creación",
        property:"auditCreateDate",
        type: "datetime",
        cssClasses: ['font-medium', 'w-10']
    },
    {
        label:"Estado",
        property:"stateCategory",
        type: "badge",
        cssClasses: ['font-medium', 'w-10']
    },
    {
        label:"",
        property:'menu',
        type: 'buttonGroup',
        buttonItems: [
            {
                buttonLabel: "Editar",
                buttonAction: "edit",
                buttonCondition: null,
                disable: false
            },
            {
                buttonLabel: "Eliminar",
                buttonAction: "remove",
                buttonCondition: null,
                disable: false
            }
        ],
        cssClasses: ['font-medium', 'w-10']
    },
]

const inputs = {
    numFilter: 0,
    textFilter:"",
    stateFilter: null,
    startDate: null,
    endDate: null
}

export const componentSettings = {
    //ICONS

    icCategory: icCategory,
    // Table Settings
    tableColumns: tableColumns,
    initialSort: "id",
    initialSortDir: "desc",
    getInputs: inputs,
    buttonLabel: "Editar",
    buttonLabel2: "Eliminar",
    columnsFilter: tableColumns.map((column)=> {return {label: column.label, property: column.property, type: column.type}})


}