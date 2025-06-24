document.addEventListener('DOMContentLoaded', function() {
    // --- KHAI BÁO BIẾN ---
    const menuLinks = document.querySelectorAll('.main-navigation a');
    let commentLookup = {};

    // Khai báo các phần tử nội dung môn học
    const tvContent = document.getElementById('tv-content');
    const tvSample = document.getElementById('tv-sample');
    const toanContent = document.getElementById('toan-content');
    const toanSample = document.getElementById('toan-sample');
    const tnxhContent = document.getElementById('tnxh-content');
    const tnxhSample = document.getElementById('tnxh-sample');
    const hdtnContent = document.getElementById('hdtn-content');
    const hdtnSample = document.getElementById('hdtn-sample');
    const daoducContent = document.getElementById('daoduc-content');
    const daoducSample = document.getElementById('daoduc-sample');
    const amnhacContent = document.getElementById('amnhac-content');
    const amnhacSample = document.getElementById('amnhac-sample');
    const mithuatContent = document.getElementById('mithuat-content');
    const mithuatSample = document.getElementById('mithuat-sample');
    const gdtcContent = document.getElementById('gdtc-content');
    const gdtcSample = document.getElementById('gdtc-sample');
    const tienganhContent = document.getElementById('tienganh-content');
    const tienganhSample = document.getElementById('tienganh-sample');
    const nlpcContent = document.getElementById('nlpc-content');
    const mauNxContent = document.getElementById('mau-nx-content');

    // Khai báo các nút bấm
    const nhapNhanXetBtnTV = document.getElementById('nhap-nhan-xet-btn');
    const copyBangDiemBtnTV = document.getElementById('copy-bang-diem-btn');
    const nhapNhanXetBtnToan = document.getElementById('nhap-nhan-xet-toan-btn');
    const copyBangDiemBtnToan = document.getElementById('copy-bang-diem-toan-btn');
    const nhapNhanXetBtnTNXH = document.getElementById('nhap-nhan-xet-tnxh-btn');
    const copyBangDiemBtnTNXH = document.getElementById('copy-bang-diem-tnxh-btn');
    const nhapNhanXetBtnHDTN = document.getElementById('nhap-nhan-xet-hdtn-btn');
    const copyBangDiemBtnHDTN = document.getElementById('copy-bang-diem-hdtn-btn');
    const nhapNhanXetBtnDaoDuc = document.getElementById('nhap-nhan-xet-daoduc-btn');
    const copyBangDiemBtnDaoDuc = document.getElementById('copy-bang-diem-daoduc-btn');
    const nhapNhanXetBtnAmNhac = document.getElementById('nhap-nhan-xet-amnhac-btn');
    const copyBangDiemBtnAmNhac = document.getElementById('copy-bang-diem-amnhac-btn');
    const nhapNhanXetBtnMiThuat = document.getElementById('nhap-nhan-xet-mithuat-btn');
    const copyBangDiemBtnMiThuat = document.getElementById('copy-bang-diem-mithuat-btn');
    const nhapNhanXetBtnGDTC = document.getElementById('nhap-nhan-xet-gdtc-btn');
    const copyBangDiemBtnGDTC = document.getElementById('copy-bang-diem-gdtc-btn');
    const nhapNhanXetBtnTiengAnh = document.getElementById('nhap-nhan-xet-tienganh-btn');
    const copyBangDiemBtnTiengAnh = document.getElementById('copy-bang-diem-tienganh-btn');
    const copyBangDiemBtnNLPC = document.getElementById('copy-bang-diem-nlpc-btn');
    const nhapNlpcBtn = document.getElementById('nhap-nlpc-btn');

    // Khai báo bảng
    const bangMonTV = document.getElementById('bang-mon-tv');
    const bangMauNhanXetTV = document.getElementById('bang-mau-nhan-xet');
    const bangMonToan = document.getElementById('bang-mon-toan');
    const bangMauNhanXetToan = document.getElementById('bang-mau-nhan-xet-toan');
    const bangMonTNXH = document.getElementById('bang-mon-tnxh');
    const bangMauNhanXetTNXH = document.getElementById('bang-mau-nhan-xet-tnxh');
    const bangMonHDTN = document.getElementById('bang-mon-hdtn');
    const bangMauNhanXetHDTN = document.getElementById('bang-mau-nhan-xet-hdtn');
    const bangMonDaoDuc = document.getElementById('bang-mon-daoduc');
    const bangMauNhanXetDaoDuc = document.getElementById('bang-mau-nhan-xet-daoduc');
    const bangMonAmNhac = document.getElementById('bang-mon-amnhac');
    const bangMauNhanXetAmNhac = document.getElementById('bang-mau-nhan-xet-amnhac');
    const bangMonMiThuat = document.getElementById('bang-mon-mithuat');
    const bangMauNhanXetMiThuat = document.getElementById('bang-mau-nhan-xet-mithuat');
    const bangMonGDTC = document.getElementById('bang-mon-gdtc');
    const bangMauNhanXetGDTC = document.getElementById('bang-mau-nhan-xet-gdtc');
    const bangMonTiengAnh = document.getElementById('bang-mon-tienganh');
    const bangMauNhanXetTiengAnh = document.getElementById('bang-mau-nhan-xet-tienganh');
    const bangMonNLPC = document.getElementById('bang-mon-nlpc');
    const bangMauNxNlpc = document.getElementById('bang-mau-nx-nlpc');

    // Khai báo nút xuất/nhập Excel
    const exportTvMauBtn = document.getElementById('export-tv-mau-btn');
    const importTvMauBtn = document.getElementById('import-tv-mau-btn');
    const importTvMauInput = document.getElementById('import-tv-mau-input');
    const exportToanMauBtn = document.getElementById('export-toan-mau-btn');
    const importToanMauBtn = document.getElementById('import-toan-mau-btn');
    const importToanMauInput = document.getElementById('import-toan-mau-input');
    const exportTnxhMauBtn = document.getElementById('export-tnxh-mau-btn');
    const importTnxhMauBtn = document.getElementById('import-tnxh-mau-btn');
    const importTnxhMauInput = document.getElementById('import-tnxh-mau-input');
    const exportHdtnMauBtn = document.getElementById('export-hdtn-mau-btn');
    const importHdtnMauBtn = document.getElementById('import-hdtn-mau-btn');
    const importHdtnMauInput = document.getElementById('import-hdtn-mau-input');
    const exportDaoDucMauBtn = document.getElementById('export-daoduc-mau-btn');
    const importDaoDucMauBtn = document.getElementById('import-daoduc-mau-btn');
    const importDaoDucMauInput = document.getElementById('import-daoduc-mau-input');
    const exportAmNhacMauBtn = document.getElementById('export-amnhac-mau-btn');
    const importAmNhacMauBtn = document.getElementById('import-amnhac-mau-btn');
    const importAmNhacMauInput = document.getElementById('import-amnhac-mau-input');
    const exportMiThuatMauBtn = document.getElementById('export-mithuat-mau-btn');
    const importMiThuatMauBtn = document.getElementById('import-mithuat-mau-btn');
    const importMiThuatMauInput = document.getElementById('import-mithuat-mau-input');
    const exportGdtcMauBtn = document.getElementById('export-gdtc-mau-btn');
    const importGdtcMauBtn = document.getElementById('import-gdtc-mau-btn');
    const importGdtcMauInput = document.getElementById('import-gdtc-mau-input');
    const exportTiengAnhMauBtn = document.getElementById('export-tienganh-mau-btn');
    const importTiengAnhMauBtn = document.getElementById('import-tienganh-mau-btn');
    const importTiengAnhMauInput = document.getElementById('import-tienganh-mau-input');
    const exportMauNxBtn = document.getElementById('export-mau-nx-btn');
    const importMauNxBtn = document.getElementById('import-mau-nx-btn');
    const importMauNxInput = document.getElementById('import-mau-nx-input');

    const NLPC_CATEGORIES = [
        'Tự chủ và tự học', 'Giao tiếp và hợp tác', 'GQVĐ và sáng tạo',
        'Ngôn ngữ', 'Tính toán', 'Khoa học', 'Thẩm mĩ', 'Thể chất',
        'Yêu nước', 'Nhân ái', 'Chăm chỉ', 'Trung thực', 'Trách nhiệm'
    ];

    // --- CÁC HÀM TIỆN ÍCH ---

    function hideAllSubjectContent() {
        const allContent = [
            tvContent, tvSample, toanContent, toanSample, tnxhContent, tnxhSample,
            hdtnContent, hdtnSample, daoducContent, daoducSample, amnhacContent, amnhacSample,
            mithuatContent, mithuatSample, gdtcContent, gdtcSample, tienganhContent, tienganhSample,
            nlpcContent, mauNxContent
        ];
        allContent.forEach(el => { if (el) el.style.display = 'none'; });
    }

    function showContentForSubject(subject) {
        hideAllSubjectContent();
        const contentMap = {
            'Môn TV': [tvContent, tvSample],
            'Môn Toán': [toanContent, toanSample],
            'Môn TNXH': [tnxhContent, tnxhSample],
            'HDTN': [hdtnContent, hdtnSample],
            'Môn Đạo đức': [daoducContent, daoducSample],
            'Âm Nhạc': [amnhacContent, amnhacSample],
            'Mĩ Thuật': [mithuatContent, mithuatSample],
            'GDTC': [gdtcContent, gdtcSample],
            'Tiếng Anh': [tienganhContent, tienganhSample],
            'NL-PC': [nlpcContent],
            'Mẫu NX': [mauNxContent]
        };

        const elementsToShow = contentMap[subject];
        if (elementsToShow) {
            elementsToShow.forEach(el => {
                if (el) {
                    el.style.display = 'block';
                    el.querySelectorAll('.action-button').forEach(btn => btn.style.display = 'inline-block');
                }
            });
        }
    }

    function updateXLColumn(tableElement) {
        const tableBody = tableElement.querySelector('tbody');
        if (!tableBody) return;
        tableBody.querySelectorAll('tr').forEach(row => {
            const cells = row.querySelectorAll('td');
            if (cells.length > 5) {
                const diemKTValue = parseFloat(cells[4].textContent.trim());
                if (!isNaN(diemKTValue)) {
                    if (diemKTValue >= 7) cells[5].textContent = 'T'; // Hoàn thành Tốt
                    else if (diemKTValue >= 5) cells[5].textContent = 'H'; // Hoàn thành
                    else cells[5].textContent = 'C'; // Chưa hoàn thành
                } else { cells[5].textContent = ''; }
            }
        });
    }

    // Hàm cho các bảng có cấu trúc "Điểm số" -> "Nội dung" (Toán, Tiếng Anh mới)
    function buildScoreBasedLookup(sampleTableElement) {
        const lookup = {};
        const tableBody = sampleTableElement.querySelector('tbody');
        if (!tableBody) return lookup;
        
        let currentKey = null;
        tableBody.querySelectorAll('tr').forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            let commentCell = null;
    
            const keyCell = cells.find(cell => cell.hasAttribute('rowspan'));
            if (keyCell) {
                currentKey = keyCell.textContent.trim();
                commentCell = cells[1];
            } else {
                commentCell = cells[0];
            }
    
            if (currentKey && commentCell) {
                const contentSpan = commentCell.querySelector('.content');
                if (contentSpan) {
                    const contentText = contentSpan.textContent.trim();
                    if (!lookup[currentKey]) {
                        lookup[currentKey] = [];
                    }
                    lookup[currentKey].push(contentText);
                }
            }
        });
        return lookup;
    }

    // Hàm cho các bảng có cấu trúc "Xếp loại" -> "Nội dung" (TNXH, Đạo đức,...)
    function buildClassificationBasedLookup(sampleTableElement) {
        const lookup = {};
        const tableBody = sampleTableElement.querySelector('tbody');
        if (!tableBody) return lookup;
        
        let currentKey = null;
        tableBody.querySelectorAll('tr').forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            let commentCell = null;
    
            const keyCell = cells.find(cell => cell.hasAttribute('rowspan'));
            if (keyCell) {
                currentKey = keyCell.textContent.trim();
                commentCell = cells[1];
            } else {
                commentCell = cells[0];
            }
    
            if (currentKey && commentCell) {
                const contentSpan = commentCell.querySelector('.content');
                if (contentSpan) {
                    const contentText = contentSpan.textContent.trim();
                    if (!lookup[currentKey]) {
                        lookup[currentKey] = [];
                    }
                    lookup[currentKey].push(contentText);
                }
            }
        });
        return lookup;
    }

    // Hàm riêng cho môn Tiếng Việt (cấu trúc phức tạp)
    function buildTvCommentLookup(sampleTableElement) {
        const lookup = { 'ĐỌC': {}, 'VIẾT': {}, 'NGHE VÀ NÓI': {} };
        const tableBody = sampleTableElement.querySelector('tbody');
        if (!tableBody) return lookup;
        let currentCategory = '';
        tableBody.querySelectorAll('tr').forEach(row => {
            const cells = Array.from(row.cells);
            const categoryCell = cells.find(cell => cell.getAttribute('rowspan') && ['ĐỌC', 'VIẾT', 'NGHE VÀ NÓI'].includes(cell.textContent.trim()));
            if (categoryCell) {
                currentCategory = categoryCell.textContent.trim();
            }
            if (currentCategory) {
                const scoreCell = cells.find(cell => /^\d+$/.test(cell.textContent.trim()) && cell.nextElementSibling);
                if (scoreCell) {
                    const contentCell = scoreCell.nextElementSibling;
                    const contentSpan = contentCell.querySelector('.content');
                    if (contentSpan) {
                        const score = scoreCell.textContent.trim();
                        const comment = contentSpan.textContent.trim();
                        if (!lookup[currentCategory][score]) {
                            lookup[currentCategory][score] = [];
                        }
                        lookup[currentCategory][score].push(comment);
                    }
                }
            }
        });
        return lookup;
    }


    function handlePasteData(event, tableElement) {
        event.preventDefault();
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedData = clipboardData.getData('text');
        const tbody = tableElement.querySelector('tbody');
        if (!tbody) return;
        tbody.innerHTML = '';
        const rows = pastedData.split('\n').filter(row => row.trim() !== '');
        rows.forEach(rowText => {
            const tr = document.createElement('tr');
            const pastedCells = rowText.split('\t');
            pastedCells.forEach(cellData => {
                const td = document.createElement('td');
                td.textContent = cellData.trim().replace(/^"|"$/g, '');
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        if (tableElement.id === 'bang-mon-tv' || tableElement.id === 'bang-mon-toan' || tableElement.id === 'bang-mon-tienganh') {
            updateXLColumn(tableElement);
        }
    }

    function copySubjectTableData(tableElement) {
        const body = tableElement.querySelector('tbody');
        if (!body) return;
        let dataToCopy = '';
        body.querySelectorAll('tr').forEach(row => {
            const rowData = [];
            const cells = row.querySelectorAll('td');
            if (cells.length > 0) {
                rowData.push(cells[0].textContent.trim());
                rowData.push('');
                for (let i = 1; i < cells.length; i++) {
                    rowData.push(cells[i].textContent.trim());
                }
            }
            dataToCopy += rowData.join('\t') + '\n';
        });
        navigator.clipboard.writeText(dataToCopy)
            .then(() => alert(`Đã sao chép dữ liệu!`))
            .catch(err => alert(`Lỗi khi sao chép: ${err}`));
    }
    
    function copyAndCombineNlpcData(tableElement) {
        const body = tableElement.querySelector('tbody');
        if (!body || body.rows.length === 0) {
            alert('Không có dữ liệu để chuyển.');
            return;
        }
        const joinComments = (comments) => {
            const cleaned = comments.map(c => c.trim().replace(/\.$/, '')).filter(c => c);
            if (cleaned.length === 0) return '';
            return cleaned.join('. ') + '.';
        };
        let dataToCopy = '';
        const rows = body.querySelectorAll('tr');
        rows.forEach(row => {
            const cells = Array.from(row.querySelectorAll('td'));
            if (cells.length < 17) return;
            const allComments = cells.slice(4).map(td => td.textContent.trim());
            const nlChungOriginal = allComments.slice(0, 3);
            const nlDacThuOriginal = allComments.slice(3, 8);
            const phamChatOriginal = allComments.slice(8, 13);
            const nlChungCombined = joinComments(nlChungOriginal);
            const nlDacThuCombined = joinComments(nlDacThuOriginal);
            const phamChatCombined = joinComments(phamChatOriginal);
            const rowData = [
                nlChungCombined, ...nlChungOriginal,
                nlDacThuCombined, ...nlDacThuOriginal,
                phamChatCombined, ...phamChatOriginal
            ];
            dataToCopy += rowData.join('\t') + '\n';
        });
        if (dataToCopy) {
            navigator.clipboard.writeText(dataToCopy.trim())
                .then(() => alert('Đã sao chép nội dung NL-PC theo mẫu!'))
                .catch(err => alert(`Lỗi khi sao chép: ${err}`));
        } else {
            alert('Không có dữ liệu để sao chép.');
        }
    }

    function exportToExcel(tableElement, fileName) {
        const rows = tableElement.querySelectorAll('tbody tr');
        const dataForExport = [["Phân loại/Điểm số", "Nội dung"]];
        let tempKey = "";
        rows.forEach(row => {
            const contentSpan = row.querySelector('.content');
            if (!contentSpan) return;
            const keyCell = row.querySelector('td[rowspan]');
            if (keyCell) {
                tempKey = keyCell.textContent.trim();
            }
             else {
                 const firstCell = row.cells[0];
                 const nextCellIsComment = firstCell.nextElementSibling && firstCell.nextElementSibling.querySelector('.content');
                 if(!nextCellIsComment && !/^\d+$/.test(firstCell.textContent.trim())){
                     tempKey = firstCell.textContent.trim();
                 }
             }
            const content = contentSpan.textContent.trim();
            dataForExport.push([tempKey, content]);
        });
        const worksheet = XLSX.utils.aoa_to_sheet(dataForExport);
        worksheet['!cols'] = [{ wch: 20 }, { wch: 80 }];
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "NhanXetMau");
        XLSX.writeFile(workbook, fileName);
    }
    
    function importFromExcel(event, tableElement) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                const commentData = jsonData.slice(1);
                const tableContentSpans = tableElement.querySelectorAll('tbody .content');
                if (commentData.length !== tableContentSpans.length) {
                    alert(`Lỗi: Tệp Excel có ${commentData.length} dòng dữ liệu, nhưng bảng mẫu cần ${tableContentSpans.length} dòng.`);
                    return;
                }
                let updatedCount = 0;
                tableContentSpans.forEach((span, index) => {
                    const dataRow = commentData[index];
                    if (dataRow && dataRow.length >= 2) {
                        const newContent = dataRow[1] ? String(dataRow[1]).trim() : "";
                        span.textContent = newContent;
                        span.setAttribute('data-default', newContent);
                        updatedCount++;
                    }
                });
                alert(`Đã cập nhật thành công ${updatedCount} nhận xét!`);
            } catch (error) {
                console.error("Lỗi khi đọc file Excel:", error);
                alert("Đã xảy ra lỗi khi đọc file. Vui lòng đảm bảo file có đúng định dạng.");
            } finally {
                event.target.value = '';
            }
        };
        reader.readAsArrayBuffer(file);
    }

    function exportNlpcToExcel(tableElement, fileName) {
        const rows = tableElement.querySelectorAll('tbody tr');
        const dataForExport = [["Năng lực, phẩm chất", "Mức độ", "Biểu hiện cụ thể"]];
        let currentSubCat = '';
        rows.forEach(row => {
            if (row.cells[0].classList.contains('main-category')) {
                dataForExport.push([row.cells[0].textContent.trim(), '', '']);
                currentSubCat = ''; return;
            }
            const subCatCell = row.querySelector('.sub-category');
            let subCatToShow = '';
            if (subCatCell) {
                currentSubCat = subCatCell.textContent.trim();
                subCatToShow = currentSubCat;
            }
            const hasSubCatCell = row.cells[0].classList.contains('sub-category');
            const levelCell = hasSubCatCell ? row.cells[1] : row.cells[0];
            const contentCell = hasSubCatCell ? row.cells[2] : row.cells[1];
            const level = levelCell.textContent.trim();
            const contentSpan = contentCell.querySelector('.content');
            const comment = contentSpan ? contentSpan.textContent.trim() : '';
            dataForExport.push([subCatToShow, level, comment]);
        });
        const worksheet = XLSX.utils.aoa_to_sheet(dataForExport);
        worksheet['!cols'] = [{ wch: 30 }, { wch: 15 }, { wch: 80 }];
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "NhanXetMau");
        XLSX.writeFile(workbook, fileName);
    }
    
    function importNlpcFromExcel(event, tableElement) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                const commentData = jsonData.slice(1).filter(row => row[1] && row[2]);
                const tableContentSpans = tableElement.querySelectorAll('tbody .content');
                if (commentData.length !== tableContentSpans.length) {
                    alert(`Lỗi: Tệp Excel có ${commentData.length} nhận xét, nhưng bảng mẫu cần ${tableContentSpans.length}.`);
                    return;
                }
                let updatedCount = 0;
                tableContentSpans.forEach((span, index) => {
                    const dataRow = commentData[index];
                    if (dataRow && dataRow.length >= 3) { 
                        const newContent = String(dataRow[2] || '').trim();
                        span.textContent = newContent;
                        span.setAttribute('data-default', newContent);
                        updatedCount++;
                    }
                });
                alert(`Đã cập nhật thành công ${updatedCount} nhận xét!`);
            } catch (error) {
                console.error("Lỗi khi đọc file Excel:", error);
                alert("Đã xảy ra lỗi khi đọc file.");
            } finally {
                event.target.value = ''; 
            }
        };
        reader.readAsArrayBuffer(file);
    }
    
    function buildNlpcCommentLookup() {
        const lookup = {};
        const rows = document.querySelectorAll('#bang-mau-nx-nlpc tbody tr');
        let currentSubCat = '';
        rows.forEach(row => {
            if (row.cells.length === 1 && row.cells[0].classList.contains('main-category')) { return; }
            if (row.cells[0].classList.contains('sub-category')) {
                currentSubCat = row.cells[0].textContent.trim();
            }
            if (!currentSubCat) return;
            if (!lookup[currentSubCat]) { lookup[currentSubCat] = { T: [], H: [], C: [] }; }
            const hasSubCatCell = row.cells[0].classList.contains('sub-category');
            const levelCell = hasSubCatCell ? row.cells[1] : row.cells[0];
            const contentCell = hasSubCatCell ? row.cells[2] : row.cells[1];
            const levelText = levelCell.textContent.trim();
            const contentSpan = contentCell.querySelector('.content');
            const comment = contentSpan ? contentSpan.textContent.trim() : '';
            if (levelText === 'Tốt') { lookup[currentSubCat]['T'].push(comment); }
            else if (levelText === 'Đạt') { lookup[currentSubCat]['H'].push(comment); }
            else if (levelText.includes('Chưa đạt')) { lookup[currentSubCat]['C'].push(comment); }
        });
        for (const cat in lookup) { lookup[cat]['Đ'] = lookup[cat]['H']; }
        if(lookup['Giải quyết vấn đề và sáng tạo']) {
             lookup['GQVĐ và sáng tạo'] = lookup['Giải quyết vấn đề và sáng tạo'];
        }
        return lookup;
    }

    // --- KHU VỰC NHẬP NHẬN XÉT (ĐÃ SỬA LỖI) ---
    if (nhapNhanXetBtnTV) {
        nhapNhanXetBtnTV.addEventListener('click', () => {
            updateXLColumn(bangMonTV);
            const body = bangMonTV.querySelector('tbody');
            if (!body) return;
            const tvCommentLookup = buildTvCommentLookup(bangMauNhanXetTV);
            body.querySelectorAll('tr').forEach(row => {
                const cells = row.querySelectorAll('td');
                if (cells.length > 5) {
                    const diemKT = cells[4].textContent.trim();
                    const finalComments = [];
                    const categories = ['ĐỌC', 'VIẾT', 'NGHE VÀ NÓI'];
                    categories.forEach(category => {
                        if (tvCommentLookup[category] && tvCommentLookup[category][diemKT] && tvCommentLookup[category][diemKT].length > 0) {
                            const commentsForScore = tvCommentLookup[category][diemKT];
                            finalComments.push(commentsForScore[Math.floor(Math.random() * commentsForScore.length)].replace(/\.$/, ''));
                        }
                    });
                    if (finalComments.length > 0) {
                        cells[3].textContent = finalComments.join('. ') + '.';
                    } else {
                        cells[3].textContent = '';
                    }
                }
            });
            alert('Đã cập nhật nhận xét môn Tiếng Việt!');
        });
    }

    function generateScoreBasedComment(nhanXetBtn, bangDiem, bangMau) {
        if (nhanXetBtn) {
            nhanXetBtn.addEventListener('click', () => {
                updateXLColumn(bangDiem);
                const body = bangDiem.querySelector('tbody');
                if (!body) return;
                const commentLookup = buildScoreBasedLookup(bangMau);
                body.querySelectorAll('tr').forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells.length >= 6 && cells[3].textContent.trim() === "") {
                        const scoreText = cells[4].textContent.trim();
                        const scoreValue = parseFloat(scoreText);
                        
                        let lookupKey = scoreText; // Mặc định key là điểm số dạng text (VD: "10", "9")
                        if (isNaN(scoreValue)) {
                            // Xử lý các trường hợp không phải số như "DƯỚI 5"
                            lookupKey = scoreText;
                        } else if (scoreValue < 5) {
                            lookupKey = "DƯỚI 5";
                        } else {
                            // Thử tìm với key là số (cho môn Toán)
                            if (!commentLookup[lookupKey]) {
                                // Nếu không thấy, thử tìm với key có tiền tố "Điểm " (cho môn Tiếng Anh)
                                lookupKey = `Điểm ${scoreText}`;
                            }
                        }

                        const possibleComments = commentLookup[lookupKey] || [];
                        if (possibleComments.length > 0) {
                            cells[3].textContent = possibleComments[Math.floor(Math.random() * possibleComments.length)];
                        }
                    }
                });
                alert(`Đã cập nhật nhận xét cho ${nhanXetBtn.textContent.replace('Nhập nhận xét ','')}!`);
            });
        }
    }
    
    function generateClassificationComment(nhanXetBtn, bangDiem, bangMau) {
        if (nhanXetBtn) {
            nhanXetBtn.addEventListener('click', () => {
                const body = bangDiem.querySelector('tbody');
                if (!body) return;
                const commentLookup = buildClassificationBasedLookup(bangMau);
                body.querySelectorAll('tr').forEach(row => {
                    const cells = row.querySelectorAll('td');
                    if (cells.length === 5 && cells[3].textContent.trim() === "") {
                        const classification = cells[4].textContent.trim().toUpperCase();
                        let lookupKey = '';
                        if (classification === 'T') lookupKey = 'Hoàn thành tốt (T)';
                        else if (classification === 'H') lookupKey = 'Hoàn thành (H)';
                        else if (classification === 'C') lookupKey = 'Chưa hoàn thành (C)';
                        
                        const possibleComments = commentLookup[lookupKey] || [];
                        if (possibleComments.length > 0) {
                            cells[3].textContent = possibleComments[Math.floor(Math.random() * possibleComments.length)];
                        }
                    }
                });
                 alert(`Đã cập nhật nhận xét cho ${nhanXetBtn.textContent.replace('Nhập nhận xét ','')}!`);
            });
        }
    }
    
    // --- GẮN KẾT SỰ KIỆN ---

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            const subject = this.textContent.trim();
            showContentForSubject(subject);
        });
    });

    document.querySelectorAll('.edit-btn').forEach(editButton => {
        editButton.addEventListener('click', function() {
            const td = this.parentElement;
            const contentSpan = td.querySelector('.content');
            if (!contentSpan || td.querySelector('input[type="text"]')) return;
            contentSpan.style.display = 'none';
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.value = contentSpan.textContent.trim();
            td.insertBefore(inputField, contentSpan);
            inputField.focus();
            let saveButton = td.querySelector('.custom-save-btn');
            if (!saveButton) {
                saveButton = document.createElement('button');
                saveButton.textContent = 'Lưu';
                saveButton.classList.add('custom-save-btn');
                td.appendChild(saveButton);
            }
            this.disabled = true;
            saveButton.addEventListener('click', function saveHandler() {
                contentSpan.textContent = inputField.value;
                inputField.remove();
                saveButton.remove();
                contentSpan.style.display = '';
                editButton.disabled = false;
                this.removeEventListener('click', saveHandler);
            });
        });
    });
    
    document.querySelectorAll('.reset-btn').forEach(button => {
        button.addEventListener('click', function() {
            const td = this.closest('td');
            const contentSpan = td ? td.querySelector('.content') : null;
            if (!contentSpan) return;
            contentSpan.textContent = contentSpan.getAttribute('data-default');
            const inputField = td.querySelector('input[type="text"]');
            if (inputField) inputField.remove();
            const saveButton = td.querySelector('.custom-save-btn');
            if (saveButton) saveButton.remove();
            contentSpan.style.display = '';
            const editButton = td.querySelector('.edit-btn');
            if (editButton) editButton.disabled = false;
        });
    });

    if (bangMonTV) bangMonTV.addEventListener('paste', (e) => handlePasteData(e, bangMonTV));
    if (bangMonToan) bangMonToan.addEventListener('paste', (e) => handlePasteData(e, bangMonToan));
    if (bangMonTNXH) bangMonTNXH.addEventListener('paste', (e) => handlePasteData(e, bangMonTNXH));
    if (bangMonHDTN) bangMonHDTN.addEventListener('paste', (e) => handlePasteData(e, bangMonHDTN));
    if (bangMonDaoDuc) bangMonDaoDuc.addEventListener('paste', (e) => handlePasteData(e, bangMonDaoDuc));
    if (bangMonAmNhac) bangMonAmNhac.addEventListener('paste', (e) => handlePasteData(e, bangMonAmNhac));
    if (bangMonMiThuat) bangMonMiThuat.addEventListener('paste', (e) => handlePasteData(e, bangMonMiThuat));
    if (bangMonGDTC) bangMonGDTC.addEventListener('paste', (e) => handlePasteData(e, bangMonGDTC));
    if (bangMonTiengAnh) bangMonTiengAnh.addEventListener('paste', (e) => handlePasteData(e, bangMonTiengAnh));
    if (bangMonNLPC) bangMonNLPC.addEventListener('paste', (e) => handlePasteData(e, bangMonNLPC));
    
    if (copyBangDiemBtnTV) copyBangDiemBtnTV.addEventListener('click', () => copySubjectTableData(bangMonTV));
    if (copyBangDiemBtnToan) copyBangDiemBtnToan.addEventListener('click', () => copySubjectTableData(bangMonToan));
    if (copyBangDiemBtnTNXH) copyBangDiemBtnTNXH.addEventListener('click', () => copySubjectTableData(bangMonTNXH));
    if (copyBangDiemBtnHDTN) copyBangDiemBtnHDTN.addEventListener('click', () => copySubjectTableData(bangMonHDTN));
    if (copyBangDiemBtnDaoDuc) copyBangDiemBtnDaoDuc.addEventListener('click', () => copySubjectTableData(bangMonDaoDuc));
    if (copyBangDiemBtnAmNhac) copyBangDiemBtnAmNhac.addEventListener('click', () => copySubjectTableData(bangMonAmNhac));
    if (copyBangDiemBtnMiThuat) copyBangDiemBtnMiThuat.addEventListener('click', () => copySubjectTableData(bangMonMiThuat));
    if (copyBangDiemBtnGDTC) copyBangDiemBtnGDTC.addEventListener('click', () => copySubjectTableData(bangMonGDTC));
    if (copyBangDiemBtnTiengAnh) copyBangDiemBtnTiengAnh.addEventListener('click', () => copySubjectTableData(bangMonTiengAnh));
    if (copyBangDiemBtnNLPC) copyBangDiemBtnNLPC.addEventListener('click', () => copyAndCombineNlpcData(bangMonNLPC));

    // Nhập nhận xét
    generateScoreBasedComment(nhapNhanXetBtnToan, bangMonToan, bangMauNhanXetToan);
    generateScoreBasedComment(nhapNhanXetBtnTiengAnh, bangMonTiengAnh, bangMauNhanXetTiengAnh);
    
    generateClassificationComment(nhapNhanXetBtnTNXH, bangMonTNXH, bangMauNhanXetTNXH);
    generateClassificationComment(nhapNhanXetBtnHDTN, bangMonHDTN, bangMauNhanXetHDTN);
    generateClassificationComment(nhapNhanXetBtnDaoDuc, bangMonDaoDuc, bangMauNhanXetDaoDuc);
    generateClassificationComment(nhapNhanXetBtnAmNhac, bangMonAmNhac, bangMauNhanXetAmNhac);
    generateClassificationComment(nhapNhanXetBtnMiThuat, bangMonMiThuat, bangMauNhanXetMiThuat);
    generateClassificationComment(nhapNhanXetBtnGDTC, bangMonGDTC, bangMauNhanXetGDTC);

    if (nhapNlpcBtn) {
        nhapNlpcBtn.addEventListener('click', () => {
            const nlpcCommentLookup = buildNlpcCommentLookup();
            const dataRows = bangMonNLPC.querySelectorAll('tbody tr');
            dataRows.forEach(row => {
                const cells = row.cells;
                for (let i = 4; i < cells.length; i++) {
                    const cell = cells[i];
                    const grade = cell.textContent.trim().toUpperCase();
                    const category = NLPC_CATEGORIES[i - 4];
                    if (category && nlpcCommentLookup[category] && nlpcCommentLookup[category][grade] && nlpcCommentLookup[category][grade].length > 0) {
                        const comments = nlpcCommentLookup[category][grade];
                        cell.textContent = comments[Math.floor(Math.random() * comments.length)];
                    }
                }
            });
            alert('Đã cập nhật nhận xét NL-PC từ mẫu!');
        });
    }

    if (exportTvMauBtn) exportTvMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetTV, 'mau-nhan-xet-mon-tv.xlsx'));
    if (importTvMauBtn) importTvMauBtn.addEventListener('click', () => importTvMauInput.click());
    if (importTvMauInput) importTvMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetTV));

    if (exportToanMauBtn) exportToanMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetToan, 'mau-nhan-xet-mon-toan.xlsx'));
    if (importToanMauBtn) importToanMauBtn.addEventListener('click', () => importToanMauInput.click());
    if (importToanMauInput) importToanMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetToan));

    if (exportTnxhMauBtn) exportTnxhMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetTNXH, 'mau-nhan-xet-mon-tnxh.xlsx'));
    if (importTnxhMauBtn) importTnxhMauBtn.addEventListener('click', () => importTnxhMauInput.click());
    if (importTnxhMauInput) importTnxhMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetTNXH));

    if (exportHdtnMauBtn) exportHdtnMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetHDTN, 'mau-nhan-xet-mon-hdtn.xlsx'));
    if (importHdtnMauBtn) importHdtnMauBtn.addEventListener('click', () => importHdtnMauInput.click());
    if (importHdtnMauInput) importHdtnMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetHDTN));
    
    if (exportDaoDucMauBtn) exportDaoDucMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetDaoDuc, 'mau-nhan-xet-mon-daoduc.xlsx'));
    if (importDaoDucMauBtn) importDaoDucMauBtn.addEventListener('click', () => importDaoDucMauInput.click());
    if (importDaoDucMauInput) importDaoDucMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetDaoDuc));

    if (exportAmNhacMauBtn) exportAmNhacMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetAmNhac, 'mau-nhan-xet-mon-amnhac.xlsx'));
    if (importAmNhacMauBtn) importAmNhacMauBtn.addEventListener('click', () => importAmNhacMauInput.click());
    if (importAmNhacMauInput) importAmNhacMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetAmNhac));

    if (exportMiThuatMauBtn) exportMiThuatMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetMiThuat, 'mau-nhan-xet-mon-mithuat.xlsx'));
    if (importMiThuatMauBtn) importMiThuatMauBtn.addEventListener('click', () => importMiThuatMauInput.click());
    if (importMiThuatMauInput) importMiThuatMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetMiThuat));

    if (exportGdtcMauBtn) exportGdtcMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetGDTC, 'mau-nhan-xet-mon-gdtc.xlsx'));
    if (importGdtcMauBtn) importGdtcMauBtn.addEventListener('click', () => importGdtcMauInput.click());
    if (importGdtcMauInput) importGdtcMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetGDTC));

    if (exportTiengAnhMauBtn) exportTiengAnhMauBtn.addEventListener('click', () => exportToExcel(bangMauNhanXetTiengAnh, 'mau-nhan-xet-mon-tienganh.xlsx'));
    if (importTiengAnhMauBtn) importTiengAnhMauBtn.addEventListener('click', () => importTiengAnhMauInput.click());
    if (importTiengAnhMauInput) importTiengAnhMauInput.addEventListener('change', (e) => importFromExcel(e, bangMauNhanXetTiengAnh));
    
    if (exportMauNxBtn) exportMauNxBtn.addEventListener('click', () => exportNlpcToExcel(bangMauNxNlpc, 'mau-nhan-xet-nlpc.xlsx'));
    if (importMauNxBtn) importMauNxBtn.addEventListener('click', () => importMauNxInput.click());
    if (importMauNxInput) importMauNxInput.addEventListener('change', (e) => importNlpcFromExcel(e, bangMauNxNlpc));
    
    // --- KHỞI TẠO TRẠNG THÁI BAN ĐẦU ---
    const activeLink = document.querySelector('.main-navigation a.active');
    if (activeLink) {
        showContentForSubject(activeLink.textContent.trim());
    } else {
        if (menuLinks.length > 0) {
            menuLinks[0].classList.add('active');
            showContentForSubject(menuLinks[0].textContent.trim());
        }
    }
});
