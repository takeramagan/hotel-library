import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-checkbox';
import '@material/mwc-formfield';

type DataProps = Map<string, unknown>[];

type ColumnProps = {
  title: string | undefined;
  field: string;
  key: string;
}[];

type EditProps = undefined | ((_: Map<string, unknown>) => void);
export class ReservationTable extends LitElement {
  @property({ type: Object }) dataSource: DataProps = [];

  @property({ type: Object }) columns: ColumnProps = [];
  @property({ type: Object }) onEdit: EditProps = undefined;

  static styles = css``;

  private getRow = (row: Map<string, unknown>, fields: string[]) => {
    const rowMap =
      row instanceof Map ? row : row ? new Map(Object.entries(row)) : new Map();

    const _row = fields.map((v) => {
      return html`<td>${rowMap.get(v)}</td>`;
    });

    return html`<tr
      @dblclick=${() =>
        this.onEdit && this.onEdit(rowMap as Map<string, unknown>)}
      key=${rowMap.get('key')}
    >
      ${_row}
    </tr>`;
  };

  render() {
    console.log(this.dataSource, this.columns);
    const fieldList = [] as string[];
    return html`
      <table>
        <tr>
          ${this.columns?.map((v) => {
            fieldList.push(v.key);
            return html`<th key=${v.key}>${v.title}</th>`;
          })}
        </tr>
        ${this.dataSource?.map((v) => this.getRow(v, fieldList))}
      </table>
    `;
  }
}

customElements.define('reservation-table', ReservationTable);
